---
"@ed-components/ed-components": minor
---

Each element can be imported on its own: `@ed-components/ed-components/ed-choice`, `ed-micro`, `ed-num`, `ed-pb`, `ed-speech` and `ed-survey` register their element. `ed-pb` registers the elements answering its questions. Bundlers no longer drop `import "@ed-components/ed-components/ed-components"`: the package declared no side effects.
