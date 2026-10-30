---
"@ed-components/ed-components": patch
---

Elements keep working when moved in the page or created from JavaScript.

- Moving an element no longer duplicates its rendering or sends several responses (`ed-choice`, `ed-ans`, `ed-num`, `ed-survey`, `ed-micro`).
- `document.createElement("ed-progress-bar")` returns a working element.
- `ed-survey` smileys keep their `readonly` state once answered.
- Several `ed-speech` elements in a page no longer share their recognition state. Its `edEvent` no longer has an always undefined `type` field.
- Defining the elements twice (several bundles, or calling `registerElements()` again) no longer throws.
