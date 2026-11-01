# @ed-components/ed-components

## 0.4.0

### Minor Changes

- dfe02a5: `ed-ans`, a work in progress, is no longer part of the bundle: `EdAnsElement` isn't exported nor registered anymore, and the package no longer depends on `wink-nlp`. `ed-pb` leaves text questions (`:100:`) without answer unless the page defines `ed-ans`.
- 871e01c: New entry points: `@ed-components/ed-components/i18n` (`registerMessages`, `Messages`) changes the interface messages without loading the elements, and `@ed-components/ed-components/emd` (`parseQuestions` and the types of the questions model) parses Educational Markdown questions for other renderers.
- 9512e8f: Each element can be imported on its own: `@ed-components/ed-components/ed-choice`, `ed-micro`, `ed-num`, `ed-pb`, `ed-speech` and `ed-survey` register their element. `ed-pb` registers the elements answering its questions. Bundlers no longer drop `import "@ed-components/ed-components/ed-components"`: the package declared no side effects.

## 0.3.0

### Minor Changes

- fa427e2: A question is written the same way in a problem and in its element alone, following the new [Educational Markdown specification](https://github.com/ed-components/ed-components/blob/main/spec/emd.md): `ed-num` accepts a question with `- :num: 3.14` and shows its stem (the expected number alone is still accepted), `ed-speech` accepts the expected answer as `- :say: hello` (the `answer` attribute still works and takes precedence), and `ed-pb` turns `:say:` lists into `ed-speech`. Questions are found by a common emd parser: `ed-pb` no longer counts a task list without correct choice as a question (the problem could never be completed), numbers question labels by question, and shows HTML content (`ishtml`) without turning its lists into questions.

### Patch Changes

- 4c28604: `ed-choice` shows feedbacks once the learner answered: a blockquote under an answer is the feedback of this answer, shown when it is chosen, as correct or incorrect; a blockquote right after the list is the feedback of the question, such as the solution. Feedbacks are displayed by a new `ed-feedback` element, hidden until revealed and announced to screen readers. In `ed-pb`, the question feedback stays hidden with its question.
- e0197ba: `ed-num` and `ed-speech` show feedbacks once the learner answered: the score with the correct answer, as correct or incorrect, then the feedback of the question, a blockquote after the answer (`ed-num`) or at the end of the question (`ed-speech`). In `ed-pb`, a blockquote right after a `:num:` list is the feedback of its `ed-num`.

## 0.2.1

### Patch Changes

- 130098e: The interface of the components is translated in English and French. Its language is the `ui-lang` attribute of the component or of an ancestor, else the page language (`<html lang>`), else English; the `lang` attribute of `ed-speech` stays the language of the answer. `registerMessages(locale, messages)`, exported by the package, changes messages or adds a language. In English, the submit button now reads "Check" instead of "Correction", and numbers shown by `ed-num` follow the interface language (`3,14` in French).
- f2ef433: The progress bars of `ed-pb` are aligned on their longest label, whatever the interface language ("Progression" in French): labels use a monospace font, so that their width in characters is exact, and percentages use tabular digits, so that the text doesn't move when the value changes.

## 0.2.0

### Minor Changes

- 11d7b61: Components are rewritten with [Lit](https://lit.dev) (about 6 KB, now a dependency of the package): `ed-num`, `ed-survey`, `ed-pb`, `ed-choice`, `ed-micro`, `ed-speech`. `ed-ans`, whose answer evaluation will move to a language model, keeps its current implementation. Rendering is asynchronous: code reading the shadow DOM after changing an element waits for `await element.updateComplete`. The `readonly` attribute of `ed-num`, which had no effect, is removed. Moving an `ed-pb` or an `ed-choice` in the page no longer resets its answers.

## 0.1.1

### Patch Changes

- 4e54d0f: The `ed-speech` microphone button has the same look as the submit button, in red, inverted while recording. Its start message no longer says to click again to stop, as the recording stops after a silence.
- 6440d69: The submit button is disabled until an answer is given: a checked answer in `ed-choice` multiple choice questions, an entered number in `ed-num` and an entered text in `ed-ans`.
- de3490a: `ed-speech` explains that the microphone needs a secure page (https) instead of reporting an unsupported browser when used on an http page.
- 1a2ac12: `ed-speech` uses the same submit button as `ed-choice`, `ed-ans` and `ed-num` ("Correction") instead of its own "Submit" button. The shared button looks disabled when it is.

## 0.1.0

### Minor Changes

- 205b6e7: `ed-speech` transcribes speech in the browser with a Whisper model instead of the Web Speech API: it works in every recent browser (not only Chrome and Safari), and the voice never leaves the device (the Web Speech API sends it to Google or Apple servers).

  - The learner clicks on the microphone and speaks: the recording stops after 2 seconds of silence (`silence` attribute, `0` to stop with the button only) or when clicking again, and after 30 seconds at most. The transcription comes after the recording, not while speaking.
  - The model is downloaded on the first use, while the learner speaks (about 100 MB with the default `onnx-community/whisper-base`), then cached by the browser. The `model` attribute selects another Whisper model, and `EdSpeechElement.transformersUrl` allows to self-host transformers.js.
  - The `answer` attribute, documented but not implemented, now adds a `score` from 0 to 100 to the `edEvent`: the similarity between the transcription and the expected answer, ignoring case, accents and punctuation.
  - Status messages are announced to screen readers and have a sufficient color contrast.

## 0.0.16

### Patch Changes

- 7d33fea: Fix scoring and answer parsing.

  - `ed-pb` no longer counts questions twice when content is given with the `emd` attribute: progress reaches 100% and the `COMPLETED` event is sent, which now includes the problem `label`.
  - `ed-pb` `:num:` answers accept decimals (`3.14`, `3,14`), negative numbers and scientific notation.
  - `ed-num` accepts a comma as decimal separator, passes `min`/`max` even when `0` and accepts decimal answers by default (`step="any"`).
  - `ed-choice` single choice questions are corrected when an answer is selected, not on any click in the question.

- 7d33fea: Elements keep working when moved in the page or created from JavaScript.

  - Moving an element no longer duplicates its rendering or sends several responses (`ed-choice`, `ed-ans`, `ed-num`, `ed-survey`, `ed-micro`).
  - `document.createElement("ed-progress-bar")` returns a working element.
  - `ed-survey` smileys keep their `readonly` state once answered.
  - Several `ed-speech` elements in a page no longer share their recognition state. Its `edEvent` no longer has an always undefined `type` field.
  - Defining the elements twice (several bundles, or calling `registerElements()` again) no longer throws.

- 7d33fea: Safari support and accessibility.

  - The check answer button is a styled native button: the previous customized built-in element did not work in Safari. Clicking its icon no longer leaves the button enabled.
  - `ed-choice` answers can be checked with the keyboard (tab and space) and have an accessible name.
  - `ed-micro` opens and navigates its slides with buttons, and `ed-survey` smileys have an accessible label.

- 7d33fea: Styles are shared between instances with adopted stylesheets, and components no longer depend on Open Props being loaded in the page: its variables get fallback values and `ed-micro` uses standard media queries. Math styles now apply to all components.
- 7d33fea: TypeScript declarations register the elements in `HTMLElementTagNameMap`: `document.createElement("ed-choice")` and `querySelector("ed-choice")` are typed. The package is built with TypeScript 7 in strict mode, and ships its `CHANGELOG.md`.
