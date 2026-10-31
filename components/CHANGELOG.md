# @ed-components/ed-components

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
