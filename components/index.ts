import { EdChoiceElement } from "./ed-choice/src/index.js";
import { EdMicroElement } from "./ed-micro/src/index.js";
import { EdNumElement } from "./ed-num/src/index.js";
// wrapper
import { EdPbElement } from "./ed-pb/src/index.js";
import { EdSpeechElement } from "./ed-speech/src/index.js";
import { EdSurveyElement } from "./ed-survey/src/index.js";

export type { Messages } from "./common/src/i18n.js";
// exports
export { registerMessages } from "./common/src/i18n.js";
// wrapper
export {
  EdChoiceElement,
  EdMicroElement,
  EdNumElement,
  EdPbElement,
  EdSpeechElement,
  EdSurveyElement,
};

export default function registerElements() {
  EdNumElement.define();
  EdChoiceElement.define();
  EdSpeechElement.define();
  EdSurveyElement.define();
  EdPbElement.define();
  EdMicroElement.define();
}
