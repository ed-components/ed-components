## Support

`ed-speech` transcribes what the learner says with a
[Whisper](https://openai.com/index/whisper/) model run in the browser by
[transformers.js](https://huggingface.co/docs/transformers.js): it works in any
recent browser, and **the voice never leaves the device**.

The model is downloaded the first time the microphone is used, while the
learner speaks (about 100 MB with the default model), then cached by the
browser. Recordings are stopped after 30 seconds.

## Usage

Click on the microphone, speak, then click on it again to stop: the
transcription is shown, and the learner can submit it or try again.

```html
<ed-speech lang="en" answer="Hello">
  Say «Hello».
</ed-speech>
```

As in every ed-component, you can use Markdown as content.

```html
<ed-speech lang="en" answer="heat">
  Say **heat** and not _it_.
</ed-speech>
```

```html
<ed-speech lang="es" answer="jamón">
  Pronuncia «jamón» en español.
</ed-speech>
```

## Attributes

- `lang`: language of the answer (`fr`, `en`, `es`…), defaults to the page
  language.
- `answer`: expected answer. The `edEvent` then gets a `score` from 0 to 100,
  the similarity between the transcription and the answer, ignoring case,
  accents and punctuation.
- `model`: Whisper model from the [Hugging Face hub](https://huggingface.co/onnx-community?search_models=whisper),
  `onnx-community/whisper-base` by default. `onnx-community/whisper-small` is
  more accurate but larger (about 270 MB) and slower;
  `onnx-community/whisper-tiny` is lighter (about 60 MB) but not reliable in
  French.

## Self-hosting

transformers.js is loaded from jsDelivr, the model from the Hugging Face hub
and the WebAssembly runtime from jsDelivr. To serve them yourself, set the
module URL before the first transcription, then configure its
[`env`](https://huggingface.co/docs/transformers.js/api/env):

```js
import { EdSpeechElement } from "@ed-components/ed-components";

EdSpeechElement.transformersUrl = "/vendor/transformers.js";
const { env } = await import("/vendor/transformers.js");
env.localModelPath = "/models/";
env.allowRemoteModels = false;
env.backends.onnx.wasm.wasmPaths = "/vendor/onnxruntime/";
```

## Credits

- [transformers.js](https://github.com/huggingface/transformers.js) and the
  [ONNX Whisper models](https://huggingface.co/onnx-community) by Hugging Face.
