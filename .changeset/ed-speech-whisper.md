---
"@ed-components/ed-components": minor
---

`ed-speech` transcribes speech in the browser with a Whisper model instead of the Web Speech API: it works in every recent browser (not only Chrome and Safari), and the voice never leaves the device (the Web Speech API sends it to Google or Apple servers).

- The learner clicks on the microphone, speaks, then clicks again to stop: the transcription comes after the recording, not while speaking. Recordings stop after 30 seconds.
- The model is downloaded on the first use, while the learner speaks (about 100 MB with the default `onnx-community/whisper-base`), then cached by the browser. The `model` attribute selects another Whisper model, and `EdSpeechElement.transformersUrl` allows to self-host transformers.js.
- The `answer` attribute, documented but not implemented, now adds a `score` from 0 to 100 to the `edEvent`: the similarity between the transcription and the expected answer, ignoring case, accents and punctuation.
- Status messages are announced to screen readers and have a sufficient color contrast.
