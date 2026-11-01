# Educational Markdown (emd)

**Draft 0.2** · 2026-11-01 · Status: working draft, describes the syntax
implemented by ed-components and the questions it raises.

Educational Markdown (emd) is Markdown extended to write exercises: questions,
answers, scores and feedbacks. This specification defines **what an author
writes and what it means**, not how it is rendered. ed-components render emd as
interactive HTML; other renderers may target LaTeX, Typst (printed exercises,
answer keys) or exchange formats such as Open edX OLX or QTI.

The key words MUST, SHOULD and MAY are to be interpreted as in
[RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

## 1. Layers

The specification has two layers:

1. **Syntax**: extensions of CommonMark and GFM, written by authors.
2. **Model**: the meaning of a document, a tree of content and questions
   ([section 6](#6-model)). Parsers produce the model; renderers consume it.

A renderer MUST NOT depend on the HTML produced by another renderer. The
conformance examples ([section 8](#8-conformance-examples)) pair an emd input
with its model.

## 2. Base syntax

An emd document is a [CommonMark](https://spec.commonmark.org/) document with
these [GFM](https://github.github.com/gfm/) extensions:

- task list items (`- [ ]`, `- [x]`), used by choice questions;
- tables, strikethrough and autolinks.

And math:

- inline math between single dollars: `$E=mc^2$`;
- display math between double dollars: `$$ … $$`.

Math is LaTeX syntax. Renderers that are not LaTeX (HTML, Typst) convert it,
e.g. ed-components output MathML.

Raw HTML is allowed but renderer specific: renderers that are not HTML MAY
ignore it. Questions MUST NOT require raw HTML.

## 3. Questions

A question is made of:

- a **stem**: the content before its answers (the question itself, and
  possibly a description);
- an **answer list**: a bullet list whose **first item** tells the type of the
  question;
- an optional **question feedback** ([section 4](#4-feedbacks)).

| First item of the list | Question type   | ed-components |
| ---------------------- | --------------- | ------------- |
| `- [ ]` or `- [x]`     | choice          | `ed-choice`   |
| `- :num: <number>`     | numeric         | `ed-num`      |
| `- :100: <text>`       | text (WIP)      | `ed-ans`      |
| `- :say: <text>`       | speech          | `ed-speech`   |

Any other bullet list is ordinary content.

The **stem** is the content preceding the answer list in the same container:
the list item of an ordered list (usual in a problem, see
[section 5](#5-problems)), or the whole element for a standalone question.

### 3.1 Choice

Each task list item is a choice. A checked item (`[x]`) is a correct choice, an
unchecked item (`[ ]`) an incorrect one. Items without a checkbox are not
choices.

```md
Who are the best guitarists of history?

- [x] Jimi Hendrix
- [ ] Your teacher
- [x] Jeff Beck
```

- The list MUST have at least one correct choice, otherwise it is not a
  question.
- With exactly one correct choice, the question is **single**: the learner
  selects one choice. With several, it is **multiple**: the learner selects
  any number of choices.
- The content of a choice is the content of the item, without its checkbox and
  its feedback.

**Score** (percentage, rounded):

- single: 100 if the selected choice is correct, else 0;
- multiple: with `c` correct choices selected, `i` incorrect choices selected
  and `n` correct choices in all: `max(0, 100 × (c − 0.5 × i) / n)`.

### 3.2 Numeric

The list has one item: `:num:` then the expected number.

```md
How many Wonders of the ancient World are still in existence?

- :num: 1
```

The number is an integer, a decimal with a dot or a comma, with an optional
exponent: `42`, `-3.14`, `-2,5`, `6.02e23`. Grammar (case insensitive):

```
number = [ "+" | "-" ] digits [ ( "." | "," ) digits ] [ "e" [ "+" | "-" ] digits ]
```

The learner answers a number, with a dot or a comma as decimal separator.

**Score** (percentage, rounded), for an expected answer `a` and a response
`r`:

- by default, from the relative error: `100 × (1 − min(1, |r − a| / |a|))`;
- **exact** evaluation: 100 if `r = a`, else 0. The evaluation is exact when
  asked ([open question 9.2](#92-question-options)) or when `a = 0`.

Options of the HTML element (`min`, `max`, `step`, `eval`) have no emd syntax
yet ([open question 9.2](#92-question-options)).

### 3.3 Text (work in progress)

Each item is an accepted answer, prefixed with its score between 0 and 100. The
first item MUST be a correct answer, with score 100.

```md
What is the capital of France?

- :100: Paris is the capital of France.
- :75: The capital is Paris.
- :50: Paris.
```

**Score**: the best product of the similarity between the response and an
answer with the score of that answer. The similarity is implementation
defined: ed-components compare bags of words, a language model is planned.

### 3.4 Speech

The list has one item: `:say:` then the expected answer, that the learner
says.

```md
Say «hello».

- :say: hello
```

**Score**: the similarity between the transcription of the response and the
expected answer, ignoring case, accents and punctuation (ed-components use a
normalized Levenshtein distance). The language of the answer has no emd syntax
yet ([open question 9.2](#92-question-options)): it is the page language.

### 3.5 Standalone elements

ed-components can also be used one question at a time: the content of the
element is **one question, written as in a problem**, so that a question can
be moved between a problem and an element unchanged.

```md
<ed-num>
Value of $\pi$?

- :num: 3,14

> $\pi \approx 3.14159$
</ed-num>
```

For compatibility, ed-components also accept:

- `ed-num`: the expected number alone, then an optional question feedback
  (`3,14`, equivalent to `- :num: 3,14`);
- `ed-speech`: a stem without answer list, the expected answer being the
  `answer` attribute (which also overrides a `:say:` list); a blockquote at
  the end is then the question feedback.

`ed-survey` has a stem only, without answer nor score.

## 4. Feedbacks

Feedbacks are hidden until the learner answers. They are blockquotes at
specific places:

- **choice feedback**: a blockquote inside a choice item. It is shown when the
  learner selects this choice, as correct or incorrect.
- **question feedback**: a blockquote right after the answer list (same
  container, no other block in between), such as the solution. It is shown
  once the learner answers, whatever the answer. A question without answer
  list (a standalone `ed-speech` without `:say:` list) has its question
  feedback at the end.

```md
What is $E$ in $E=mc^2$?

- [ ] mass
  > No, $m$ is the mass.
- [x] energy
- [ ] entropy
  > No, entropy is usually written $S$.

> $E$ is the energy, $m$ the mass and $c$ the speed of light.
```

Any other blockquote is ordinary content, such as a description in the stem:

```md
What is the capital of France?

> Write a sentence.

- :100: Paris is the capital of France.
```

Once answered, renderers SHOULD also show the score and the correct answer of
numeric and text questions.

Renderers without interaction (print) SHOULD NOT show feedbacks next to the
questions: they MAY gather them in an answer key, with the correct answers.

## 5. Problems

A problem (`ed-pb`) is an emd document with several questions, usually one per
item of an ordered list:

```md
# Wonders of the World

1. How many Wonders of the ancient World were there?

   - :num: 7

1. Which one still exists?

   - [ ] The Colossus of Rhodes
   - [x] The Great Pyramid of Giza

   > The others were destroyed by earthquakes and fires.
```

- Every answer list of the document is a question, in document order. Lists
  inside a question (in a choice or a feedback) are not questions.
- The stem of a question is the content of its container before the answer
  list, after the previous question of the same container.
- Each question gets a label: `Q<n>: ` followed by the first 30 characters of
  the text of its stem, where `n` is the number of the question.
- The score of the problem is the mean of the question scores, unanswered
  questions counting 0. Renderers SHOULD show the progress (answered
  questions) and the score while answering.

### Micro-content

Micro-content (`ed-micro`) splits an emd document into slides: a new slide
starts at each heading and at each thematic break (`---`). Slides MAY contain
problems.

## 6. Model

Parsers produce this model, written as TypeScript types (implemented by
`components/common/src/emd.ts`). Rich content is emd source, without the
indentation and blockquote markers of its container, so that each renderer
converts it in its own format.

```ts
/** emd source */
type Content = string;

interface Document {
  type: "document";
  children: (Content[number] | Question)[];
}

type Question =
  | ChoiceQuestion
  | NumericQuestion
  | TextQuestion
  | SpeechQuestion;

interface QuestionBase {
  /** Content before the answer list */
  stem: Content;
  /** Shown once answered, whatever the answer */
  feedback?: Content;
}

interface ChoiceQuestion extends QuestionBase {
  type: "choice";
  mode: "single" | "multiple";
  choices: {
    content: Content;
    correct: boolean;
    /** Shown when this choice is selected */
    feedback?: Content;
  }[];
}

interface NumericQuestion extends QuestionBase {
  type: "numeric";
  answer: number;
}

interface TextQuestion extends QuestionBase {
  type: "text";
  answers: { text: string; score: number }[];
}

interface SpeechQuestion extends QuestionBase {
  type: "speech";
  answer: string;
}
```

Options (numeric evaluation, bounds, speech language) will be added with their
syntax ([open question 9.2](#92-question-options)).

A problem is a `Document` whose questions are scored together.

## 7. Renderers

A renderer:

- MUST render every question of the model, or report the ones it cannot
  render;
- MUST NOT reveal correct answers nor feedbacks before the learner answers,
  when it is interactive;
- SHOULD be accessible: e.g. ed-components give each choice an accessible name
  and announce the feedbacks to screen readers.

Non-interactive renderers (LaTeX, Typst) SHOULD render choices as boxes to
tick (round for single, square for multiple) and numeric or text questions as
a blank to fill, then MAY add an answer key.

## 8. Conformance examples

Each example pairs an emd input with its model. They are tested in
`components/common/test/emd.test.ts`, and SHOULD become fixture files
(`spec/fixtures/<name>.md` and `<name>.json`) shared by parsers and renderers.

### 8.1 Single choice with feedbacks

```md
What is $E$ in $E=mc^2$?

- [ ] mass
  > No, $m$ is the mass.
- [x] energy

> $E$ is the energy.
```

```json
{
  "type": "choice",
  "mode": "single",
  "stem": "What is $E$ in $E=mc^2$?",
  "choices": [
    { "content": "mass", "correct": false, "feedback": "No, $m$ is the mass." },
    { "content": "energy", "correct": true }
  ],
  "feedback": "$E$ is the energy."
}
```

### 8.2 Multiple choice

```md
Primary colors of light:

- [x] red
- [ ] yellow
- [x] blue
```

```json
{
  "type": "choice",
  "mode": "multiple",
  "stem": "Primary colors of light:",
  "choices": [
    { "content": "red", "correct": true },
    { "content": "yellow", "correct": false },
    { "content": "blue", "correct": true }
  ]
}
```

Selecting red and yellow scores `max(0, 100 × (1 − 0.5) / 2) = 25`.

### 8.3 Numeric with a decimal comma

```md
Value of $\pi$ to two decimals?

- :num: 3,14

> $\pi \approx 3.14159$
```

```json
{
  "type": "numeric",
  "stem": "Value of $\\pi$ to two decimals?",
  "answer": 3.14,
  "feedback": "$\\pi \\approx 3.14159$"
}
```

Answering `3` scores `round(100 × (1 − 0.14 / 3.14)) = 96`.

### 8.4 Not questions

```md
- [ ] a task list without correct choice

> A blockquote after a list that is not a question.

- :num: not a number
```

The model has no question: two lists and a blockquote of content.

## 9. Open questions

These points are inconsistent or missing in the current syntax, and SHOULD be
settled before version 1.0.

### 9.1 One syntax per question type

Settled in draft 0.2: a standalone element contains one question written as in
a problem ([section 3.5](#35-standalone-elements)). The former syntaxes stay
accepted for compatibility, and SHOULD be removed in version 1.0.

### 9.2 Question options

Options have no emd syntax: numeric `eval`, `min`, `max`, `step`; speech
`lang`; choice shuffling. Candidates:

- attributes after the list, as in Pandoc or markdown-it-attrs:
  `- :num: 3.14 {eval=exact}`;
- options in the marker: `- :num(exact): 3.14`;
- a YAML front matter for the whole document (planned in `common`).

### 9.3 Explicit feedbacks

A blockquote after an answer list always becomes the question feedback, even
when the author meant a note. An explicit marker, in the style of
[GFM alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts), would
remove the ambiguity and allow several kinds of feedback:

```md
> [!solution]
> $E$ is the energy.

> [!hint]
> Think of Einstein.
```

### 9.4 Single or multiple choice

The mode is inferred from the number of correct choices, so the interface
(radio buttons or checkboxes) tells the learner whether several answers are
correct. Open edX keeps them as two problem types. An explicit marker for
multiple choice would let authors choose.

### 9.5 Markers and emoji

`:100:` is also the emoji shortcode 💯 on GitHub and in Markdown processors
with emoji plugins, so text questions do not preview as intended there. `:num:`
has no such conflict.

### 9.6 Identifiers

Question labels are built from the number of the question and the first 30
characters of its stem, so they change with the text and may collide. Learning records (xAPI) need stable
identifiers: e.g. from heading ids, or an `id` option.

### 9.7 Open edX and other formats

Compared to the
[Open edX OLX](https://docs.openedx.org/en/latest/educators/references/course_development/exercise_tools/single_select_xml.html)
problems, emd lacks shuffling (`shuffle`, `fixed`), hints on demand
(`<demandhint>`), partial credit (`correct="partial"`) and answer pools.
[GIFT](https://docs.moodle.org/en/GIFT_format), the Moodle text format, is
prior art for a text syntax with feedbacks and numeric tolerances
(`{#3.14:0.01}`), and [QTI](https://www.1edtech.org/standards/qti) the
exchange standard: the model SHOULD be convertible to both.
