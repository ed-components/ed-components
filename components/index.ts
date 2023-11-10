import { EdAnsElement } from "./ed-ans/src/index.js";
import { EdNumElement } from "./ed-num/src/index.js";
import { EdChoiceElement } from "./ed-choice/src/index.js";
import { EdSpeechElement } from "./ed-speech/src/index.js";
import { EdSurveyElement } from "./ed-survey/src/index.js";

// wrapper
import { EdPbElement } from "./ed-pb/src/index.js";
import { EdMicroElement } from "./ed-micro/src/index.js";

// exports
export { EdAnsElement };
export { EdNumElement };
export { EdChoiceElement };
export { EdSpeechElement };
export { EdSurveyElement };

// wrapper
export { EdPbElement };
export { EdMicroElement };

export default function registerElements() {
  EdAnsElement.define();
  EdNumElement.define();
  EdChoiceElement.define();
  EdSpeechElement.define();
  EdSurveyElement.define();
  EdPbElement.define();
  EdMicroElement.define();
}
