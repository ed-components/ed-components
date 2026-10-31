---
"@ed-components/ed-components": patch
---

Components are rewritten with [Lit](https://lit.dev) (about 6 KB, now a dependency of the package): `ed-num`, `ed-survey`, `ed-pb`, `ed-choice`. Rendering is asynchronous: code reading the shadow DOM after changing an element waits for `await element.updateComplete`. The `readonly` attribute of `ed-num`, which had no effect, is removed. Moving an `ed-pb` or an `ed-choice` in the page no longer resets its answers.
