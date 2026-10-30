---
name: wc-best-practices
description: Web component checklist for this repo. Use when writing, changing or reviewing an element in components/*/src (ed-* components and their internal elements), and before committing changes to them. It replaces the ESLint wc plugin with checks no linter can do.
---

# Web components best practices for ed-components

Type checks are done by `tsc` (`strict`, `noUnusedLocals`, `noUnusedParameters`):
run `pnpm lint` in `components/`. This skill covers what the compiler can't see.
Every rule below comes from a bug found in this repo.

## How to use

- **Writing or changing an element**: follow the rules, then run `pnpm lint` and
  `pnpm test` in `components/`, and add a test in `<component>/test/` for any
  behavior you fix or add.
- **Reviewing**: check each rule against the changed elements and report findings
  as `file:line — rule — concrete failure — fix`. Only report what you verified
  in the code, not what might happen in theory.

## Lifecycle

1. **`connectedCallback` must be idempotent.** It runs again each time the element
   is moved in the DOM. Never accumulate state (`this.n += 1`, `addEventListener`)
   without resetting it first.
2. **Mind async races.** When an async method (it `await`s `md2HTML`) can be
   started by both `attributeChangedCallback` and `connectedCallback`, reset state
   *after* the `await`, right before the synchronous rebuild. See
   `_processEmd()` in `ed-pb/src/EdPb.ts`.
3. **Constructor: only `attachShadow()`, the template and listeners on the
   element's own shadow DOM.** Don't read or set attributes or children there:
   they may not exist yet (parser upgrade), and a constructor that adds an
   attribute makes `document.createElement()` silently return an
   `HTMLUnknownElement` (the error is reported, not thrown). Set defaults in
   `connectedCallback` (see `ed-pb/src/_EdProgressBar.ts`).
4. **Read children (`innerHTML`, `querySelectorAll` on light DOM) in
   `connectedCallback`, not earlier.**

## Events and listeners

5. **Register listeners on shadow DOM elements once, in the constructor.**
   Elements of the element's own template live as long as the element.
6. **`removeEventListener(type, this.fn.bind(this))` removes nothing**: `bind`
   creates a new function. Store the bound function in a field if it must be
   removed.
7. **Trigger grading on the meaningful event** (`change` from an input), not on
   any `click` inside the component.
8. **`edEvent` detail keeps the shared shape**: `date`, `url`, `tag`, `label`,
   `verb` (xAPI verb: `RESPONDED`, `COMPLETED`), then `score` and/or the
   response. Don't add fields that are always `undefined`. The event bubbles
   but is not `composed`: a wrapper (`ed-pb`) listens inside its own shadow root.

## Attributes and properties

9. **HTML lowercases attribute names**: `observedAttributes: ["isHTML"]` never
   fires. Use lowercase names for new attributes (`is-html` style).
10. **Never reflect an attribute back in `attributeChangedCallback`**
    (`this[name] = newValue`). For booleans the value is `""`, which is falsy:
    the setter removes the attribute that was just set (bug fixed in
    `ed-survey/src/_EdSmiley.ts`).
11. **Typed accessors**: string attributes are
    `get x(): string | null` / `set x(value: string)`; boolean attributes use
    `hasAttribute` / `setAttribute(x, "")` / `removeAttribute(x)`.
12. **Numbers from authors**: `0` is a valid value (`hasAttribute("min")`, not
    `if (this.min)`), and teachers write French decimals (`3,14`).

## Typing conventions

13. Each element class declares `declare readonly shadowRoot: ShadowRoot;`
    (attached in the constructor, never null) and registers its tag at the end of
    the file:

    ```ts
    declare global {
      interface HTMLElementTagNameMap {
        "ed-foo": EdFooElement;
      }
    }
    ```

    Then `document.createElement("ed-foo")` and `querySelector("ed-foo")` are
    typed: no casts, no `@ts-ignore`.
14. **`!` only for the element's own template** (`querySelector("#label")!`).
    Content written by authors (markdown lists, `li`, `input`, `parentElement`)
    can be missing: check for `null` and skip or fall back.
15. No `@ts-ignore` / `@ts-nocheck` outside vendored code (`ed-survey/src/nudeui`).
    Browser APIs without DOM typings get a local
    `/// <reference types="..." />`, and libraries loaded at runtime a local
    type of the part of their API used (see `ed-speech/src/whisper.ts`).

## Compatibility and accessibility

16. **No customized built-ins** (`extends: "button"`, `is="..."`): Safari doesn't
    support them. Use an autonomous element or a styled native element.
17. **`customElements.define` must be guarded** with `customElements.get(tagName)`
    when an element can be bundled twice (shared elements in `common/`).
18. **Interactive things are buttons**: keyboard reachable, with an accessible
    name. No click handler on `span`/`svg` alone.
19. **CSS in shadow DOM is plain CSS**: no PostCSS custom media (`@media
    (--motionOK)`), and give a fallback to Open Props variables
    (`var(--blue-7, #1c7ed6)`).

20. **Styles are shared stylesheets, not `<style>` in templates**: create the
    element's sheet once at module level with `stylesheet()` and adopt it after
    the common one in the constructor:
    `this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet];`
    (`common/src/styles.ts`). Values used by several components (colors, font,
    math, check button, `.user-input`) go in `commonSheet`.

## Markdown content

21. Content is markdown unless `isHTML` is set: parse it with the dynamically
    imported `md2HTML` from `common/src/index.js`. A wrapper that passes
    already parsed HTML to a child component must set `isHTML` on it.
