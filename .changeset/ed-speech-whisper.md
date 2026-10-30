---
"@ed-components/ed-components": minor
---

`ed-speech` transcribes speech in the browser with a Whisper model instead of the Web Speech API: it works in every recent browser (not only Chrome and Safari), and the voice never leaves the device (the Web Speech API sends it to Google or Apple servers).

- The learner clicks on the microphone and speaks: the recording stops after 2 seconds of silence (`silence` attribute, `0` to stop with the button only) or when clicking again, and after 30 seconds at most. The transcription comes after the recording, not while speaking.
- The model is downloaded on the first use, while the learner speaks (about 100 MB with the default `onnx-community/whisper-base`), then cached by the browser. The `model` attribute selects another Whisper model, and `EdSpeechElement.transformersUrl` allows to self-host transformers.js.
- The `answer` attribute, documented but not implemented, now adds a `score` from 0 to 100 to the `edEvent`: the similarity between the transcription and the expected answer, ignoring case, accents and punctuation.
- Status messages are announced to screen readers and have a sufficient color contrast.
