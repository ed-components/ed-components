import { expect } from "@open-wc/testing";
import { parseQuestions } from "../src/emd.js";

/** Questions of a document, without their list index */
const questions = (markdown: string) =>
  parseQuestions(markdown).map(({ question }) => question);

describe("emd parser", () => {
  // conformance examples of spec/emd.md
  it("8.1 single choice with feedbacks", () => {
    expect(
      questions(`What is $E$ in $E=mc^2$?

- [ ] mass
  > No, $m$ is the mass.
- [x] energy

> $E$ is the energy.`),
    ).to.deep.equal([
      {
        type: "choice",
        mode: "single",
        stem: "What is $E$ in $E=mc^2$?",
        choices: [
          {
            content: "mass",
            correct: false,
            feedback: "No, $m$ is the mass.",
          },
          { content: "energy", correct: true },
        ],
        feedback: "$E$ is the energy.",
      },
    ]);
  });

  it("8.2 multiple choice", () => {
    expect(
      questions(`Primary colors of light:

- [x] red
- [ ] yellow
- [x] blue`),
    ).to.deep.equal([
      {
        type: "choice",
        mode: "multiple",
        stem: "Primary colors of light:",
        choices: [
          { content: "red", correct: true },
          { content: "yellow", correct: false },
          { content: "blue", correct: true },
        ],
      },
    ]);
  });

  it("8.3 numeric with a decimal comma", () => {
    expect(
      questions(`Value of $\\pi$ to two decimals?

- :num: 3,14

> $\\pi \\approx 3.14159$`),
    ).to.deep.equal([
      {
        type: "numeric",
        stem: "Value of $\\pi$ to two decimals?",
        answer: 3.14,
        feedback: "$\\pi \\approx 3.14159$",
      },
    ]);
  });

  it("8.4 not questions", () => {
    expect(
      questions(`- [ ] a task list without correct choice

> A blockquote after a list that is not a question.

- :num: not a number`),
    ).to.deep.equal([]);
  });

  it("finds the questions of a problem, with their list", () => {
    const found = parseQuestions(`# Wonders

- a list of content

1. How many Wonders were there?

   - :num: 7

1. Which one still exists?

   > A description.

   - [ ] The Colossus of Rhodes
   - [x] The Great Pyramid of Giza

   > The others were destroyed.

1. Say «pyramid».

   - :say: pyramid

1. Where is it?

   - :100: It is in Egypt.
   - :50: Egypt.`);
    expect(found.map(({ list }) => list)).to.deep.equal([1, 2, 3, 4]);
    const [num, choice, speech, text] = found.map(({ question }) => question);
    expect(num).to.deep.equal({
      type: "numeric",
      stem: "How many Wonders were there?",
      answer: 7,
    });
    expect(choice.stem).to.equal("Which one still exists?\n\n> A description.");
    expect(choice.feedback).to.equal("The others were destroyed.");
    expect(speech).to.deep.equal({
      type: "speech",
      stem: "Say «pyramid».",
      answer: "pyramid",
    });
    expect(text).to.deep.equal({
      type: "text",
      stem: "Where is it?",
      answers: [
        { score: 100, text: "It is in Egypt." },
        { score: 50, text: "Egypt." },
      ],
    });
  });

  it("keeps the markdown of multi-line content", () => {
    const [{ question }] = parseQuestions(`1. Question

   - [x] **first**
     continued
     > a feedback
     > on two lines
     >
     > - with a list
   - [ ] second`);
    expect(question).to.deep.equal({
      type: "choice",
      mode: "single",
      stem: "Question",
      choices: [
        {
          content: "**first**\ncontinued",
          correct: true,
          feedback: "a feedback\non two lines\n\n- with a list",
        },
        { content: "second", correct: false },
      ],
    });
  });

  it("counts lists inside questions, which are not questions", () => {
    const found = parseQuestions(`- [x] yes
  - [x] nested task list
- [ ] no

> feedback

- :num: 2`);
    expect(
      found.map(({ list, question }) => [list, question.type]),
    ).to.deep.equal([
      [0, "choice"],
      [2, "numeric"],
    ]);
    expect(found[1].question.stem).to.equal("");
  });
});
