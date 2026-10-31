/**
 * Translations of the components interface.
 *
 * The interface language is the `ui-lang` attribute of the element or of an
 * ancestor (across shadow roots, so that questions of an ed-pb follow it),
 * else the page language (`<html lang>`), else English. It is not the `lang`
 * attribute of a component, which is the language of the exercise (ed-speech).
 */

const en = {
  submit: "Check",
  enterAnswer: "Enter your answer",
  enterNumber: "Enter a number",
  score: (score: number, answer: string) =>
    `Score: ${score}% the correct answer was: ${answer}`,
  // ed-feedback
  feedbackCorrect: "Correct",
  feedbackIncorrect: "Incorrect",
  feedbackInfo: "Explanation",
  // ed-micro
  openMicro: "Open micro-learning content",
  closeDialog: "Close dialog",
  previousSlide: "Previous slide",
  nextSlide: "Next slide",
  // ed-pb
  progress: "Progress",
  success: "Success",
  // ed-survey
  surveyQuestion: "How are you today?",
  confusedFace: "Confused face",
  neutralFace: "Neutral face",
  grinningFace: "Grinning face",
  // ed-speech
  speechQuestion: "Say something!",
  startRecording: "Start recording",
  stopRecording: "Stop recording",
  speechStart: "Click on the microphone and speak.",
  speechRecording:
    "Recording… It stops when you stop speaking, or click on the microphone.",
  speechRecordingManual: "Recording… Click on the microphone to stop.",
  speechLoading:
    "Loading speech recognition (first time only), your voice stays on your device…",
  speechTranscribing: "Transcribing…",
  speechTranscribed:
    "Submit your answer, or click on the microphone to try again.",
  speechNoSpeech:
    "No speech was detected, click on the microphone to try again.",
  speechNoMicrophone:
    "No microphone was found. Ensure that a microphone is connected and allowed for this page.",
  speechDenied:
    "Permission to use the microphone was denied. Allow it in the browser settings of this page.",
  speechInsecure: "The microphone is only available on secure pages (https).",
  speechUnsupported: "Recording audio is not supported by this browser.",
  speechFailed: "Speech recognition failed, please try again.",
};

export type Messages = typeof en;

// French typography: non-breaking space before ":", "%", "?" and "!"
const fr: Messages = {
  submit: "Correction",
  enterAnswer: "Saisissez votre réponse",
  enterNumber: "Saisissez un nombre",
  score: (score, answer) =>
    `Score : ${score} % la bonne réponse était : ${answer}`,
  feedbackCorrect: "Correct",
  feedbackIncorrect: "Incorrect",
  feedbackInfo: "Explication",
  openMicro: "Ouvrir le contenu de micro-apprentissage",
  closeDialog: "Fermer",
  previousSlide: "Diapositive précédente",
  nextSlide: "Diapositive suivante",
  progress: "Progression",
  success: "Réussite",
  surveyQuestion: "Comment allez-vous aujourd'hui ?",
  confusedFace: "Visage perplexe",
  neutralFace: "Visage neutre",
  grinningFace: "Visage souriant",
  speechQuestion: "Dites quelque chose !",
  startRecording: "Démarrer l'enregistrement",
  stopRecording: "Arrêter l'enregistrement",
  speechStart: "Cliquez sur le micro et parlez.",
  speechRecording:
    "Enregistrement… Il s'arrête quand vous cessez de parler, ou cliquez sur le micro.",
  speechRecordingManual: "Enregistrement… Cliquez sur le micro pour arrêter.",
  speechLoading:
    "Chargement de la reconnaissance vocale (la première fois seulement), votre voix reste sur votre appareil…",
  speechTranscribing: "Transcription…",
  speechTranscribed:
    "Envoyez votre réponse, ou cliquez sur le micro pour réessayer.",
  speechNoSpeech:
    "Aucune parole détectée, cliquez sur le micro pour réessayer.",
  speechNoMicrophone:
    "Aucun micro trouvé. Vérifiez qu'un micro est branché et autorisé pour cette page.",
  speechDenied:
    "L'accès au micro a été refusé. Autorisez-le dans les réglages du navigateur pour cette page.",
  speechInsecure:
    "Le micro n'est disponible que sur les pages sécurisées (https).",
  speechUnsupported:
    "L'enregistrement audio n'est pas pris en charge par ce navigateur.",
  speechFailed: "La reconnaissance vocale a échoué, veuillez réessayer.",
};

const catalogs: Record<string, Partial<Messages>> = { en, fr };

/**
 * Add or change translations, e.g.
 * `registerMessages("fr", { submit: "Valider" })` or a new language.
 * Missing messages fall back to English.
 */
export function registerMessages(locale: string, messages: Partial<Messages>) {
  const language = locale.split("-")[0].toLowerCase();
  catalogs[language] = { ...catalogs[language], ...messages };
}

/** Interface language of an element, e.g. "fr" */
export function uiLocale(el: Element): string {
  let node: Element | null = el;
  while (node !== null) {
    const lang = node.getAttribute("ui-lang");
    if (lang) return lang.split("-")[0].toLowerCase();
    // the host of a shadow root is the next ancestor
    const root = node.getRootNode();
    node =
      node.parentElement ?? (root instanceof ShadowRoot ? root.host : null);
  }
  const page = document.documentElement.lang;
  return page ? page.split("-")[0].toLowerCase() : "en";
}

type Args<K extends keyof Messages> = Messages[K] extends (
  ...args: infer A
) => string
  ? A
  : [];

/** Message `key` in the interface language of `el` */
export function t<K extends keyof Messages>(
  el: Element,
  key: K,
  ...args: Args<K>
): string {
  const message: string | ((...args: never[]) => string) =
    catalogs[uiLocale(el)]?.[key] ?? en[key];
  return typeof message === "function"
    ? (message as (...args: Args<K>) => string)(...args)
    : message;
}

/** A number in the interface language of `el`, e.g. "3,14" in French */
export function formatNumber(el: Element, value: number): string {
  return new Intl.NumberFormat(uiLocale(el), {
    maximumFractionDigits: 20,
  }).format(value);
}
