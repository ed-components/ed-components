/**
 * Educational Markdown (emd) parser: finds the questions of a document and
 * returns their model, see spec/emd.md. Content (stems, choices, feedbacks)
 * stays emd source: each component renders it in its own format.
 */

import type { Blockquote, List, Nodes, Parents, RootContent } from "mdast";
import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmTaskListItemFromMarkdown } from "mdast-util-gfm-task-list-item";
import { mathFromMarkdown } from "mdast-util-math";
import { gfmTaskListItem } from "micromark-extension-gfm-task-list-item";
import { math } from "micromark-extension-math";

/** emd source */
export type Content = string;

interface QuestionBase {
  /** Content before the answer list */
  stem: Content;
  /** Shown once answered, whatever the answer */
  feedback?: Content;
}

export interface Choice {
  content: Content;
  correct: boolean;
  /** Shown when this choice is selected */
  feedback?: Content;
}

export interface ChoiceQuestion extends QuestionBase {
  type: "choice";
  mode: "single" | "multiple";
  choices: Choice[];
}

export interface NumericQuestion extends QuestionBase {
  type: "numeric";
  answer: number;
}

export interface TextQuestion extends QuestionBase {
  type: "text";
  answers: { text: string; score: number }[];
}

export interface SpeechQuestion extends QuestionBase {
  type: "speech";
  answer: string;
}

export type Question =
  | ChoiceQuestion
  | NumericQuestion
  | TextQuestion
  | SpeechQuestion;

export interface FoundQuestion {
  question: Question;
  /**
   * Index of the answer list among the unordered lists of the document, in
   * document order: the `ul` elements of its HTML
   */
  list: number;
}

// integers, decimals (dot or comma) and scientific notation: 42, -3.14, 6,02e23
const number = String.raw`[-+]?\d+(?:[.,]\d+)?(?:e[-+]?\d+)?`;
const numericItem = new RegExp(String.raw`^:num:\s+(${number})\s*$`, "i");
const speechItem = /^:say:\s+(\S[\s\S]*)$/;
const textItem = /^:(\d+):\s+(\S[\s\S]*)$/;

/** Number written by a teacher or a learner, with a dot or a comma */
export function parseNumber(s: string): number {
  return Number(s.trim().replace(",", "."));
}

/** Expected number alone, the former syntax of ed-num: "3.14" */
export const bareNumber = new RegExp(
  String.raw`^\s*(${number})\s*(?:\n|$)`,
  "i",
);

/** Questions of an emd document, in document order */
export function parseQuestions(markdown: string): FoundQuestion[] {
  const tree = fromMarkdown(markdown, {
    extensions: [gfmTaskListItem(), math()],
    mdastExtensions: [gfmTaskListItemFromMarkdown(), mathFromMarkdown()],
  });

  /** Source of consecutive nodes, without the indentation of their container */
  const source = (nodes: RootContent[]) => {
    if (nodes.length === 0) return "";
    const start = nodes[0].position?.start;
    const end = nodes[nodes.length - 1].position?.end.offset;
    if (start?.offset === undefined || end === undefined) return "";
    const indent = new RegExp(`^ {0,${start.column - 1}}`);
    return markdown
      .slice(start.offset, end)
      .split("\n")
      .map((line, i) => (i === 0 ? line : line.replace(indent, "")))
      .join("\n");
  };

  /** Content of a blockquote, without its markers */
  const quote = (blockquote: Blockquote) =>
    source([blockquote])
      .split("\n")
      .map((line) => line.replace(/^ {0,3}> ?/, ""))
      .join("\n")
      .trim();

  const question = (
    list: List,
    stem: Content,
    feedback?: Content,
  ): Question | undefined => {
    const [first] = list.children;
    if (first === undefined) return undefined;
    const base = feedback === undefined ? { stem } : { stem, feedback };

    // choice: task list items
    if (typeof first.checked === "boolean") {
      const choices = list.children
        .filter((item) => typeof item.checked === "boolean")
        .map((item) => {
          const quotes = item.children.filter(
            (node) => node.type === "blockquote",
          );
          const choice: Choice = {
            // the paragraph of a single line starts after the checkbox,
            // not one of several lines
            content: source(
              item.children.filter((node) => node.type !== "blockquote"),
            )
              .replace(/^\[[ xX]\]\s+/, "")
              .trim(),
            correct: item.checked === true,
          };
          if (quotes.length > 0) {
            choice.feedback = quotes.map(quote).join("\n\n");
          }
          return choice;
        });
      const nCorrect = choices.filter((choice) => choice.correct).length;
      // a question needs a correct choice
      if (nCorrect === 0) return undefined;
      const mode = nCorrect === 1 ? "single" : "multiple";
      return { type: "choice", mode, choices, ...base };
    }

    const text = source(first.children).trim();
    const numeric = numericItem.exec(text);
    if (numeric !== null) {
      return { type: "numeric", answer: parseNumber(numeric[1]), ...base };
    }
    const speech = speechItem.exec(text);
    if (speech !== null) {
      return { type: "speech", answer: speech[1].trim(), ...base };
    }
    // text: the first answer is a correct one
    if (text.startsWith(":100: ")) {
      const answers: TextQuestion["answers"] = [];
      list.children.forEach((item) => {
        const answer = textItem.exec(source(item.children).trim());
        if (answer !== null) {
          answers.push({ score: Number(answer[1]), text: answer[2].trim() });
        }
      });
      return { type: "text", answers, ...base };
    }
    return undefined;
  };

  const found: FoundQuestion[] = [];
  let lists = 0;

  /** Walk in document order; lists inside a question are not questions */
  const visit = (parent: Parents, inQuestion: boolean) => {
    // the stem starts after the previous question of the container
    let stemStart = 0;
    // feedback of the previous question, part of it
    let feedbackNode: Nodes | undefined;
    parent.children.forEach((node, i) => {
      let isQuestion = inQuestion || node === feedbackNode;
      if (node.type === "list" && !node.ordered) {
        const list = lists++;
        const next = parent.children[i + 1];
        const blockquote = next?.type === "blockquote" ? next : undefined;
        const stem = parent.children.slice(stemStart, i) as RootContent[];
        const q = isQuestion
          ? undefined
          : question(node, source(stem), blockquote && quote(blockquote));
        if (q !== undefined) {
          found.push({ question: q, list });
          feedbackNode = blockquote;
          stemStart = i + (blockquote ? 2 : 1);
          isQuestion = true;
        }
      }
      if ("children" in node) {
        visit(node, isQuestion);
      }
    });
  };
  visit(tree, false);
  return found;
}
