---
name: wc-best-practices
description: Web component checklist for this repo. Use when writing, changing or reviewing an element in components/*/src (ed-* components and their internal elements), and before committing changes to them. It replaces the ESLint wc plugin with checks no linter can do.
---

# Web components best practices for ed-components

Elements are written with [Lit](https://lit.dev) (`LitElement`), except `ed-ans`,
whose evaluation will move to a language model. Type checks are done by `tsc`
(`strict`, `noUnusedLocals`, `noUnusedParameters`): run `pnpm lint` in
`components/`. This skill covers what the compiler can't see. Every rule below
comes from a bug found in this repo.

## How to use

- **Writing or changing an element**: follow the rules, then run `pnpm lint` and
  `pnpm test` in `components/`, and add a test in `<component>/test/` for any
  behavior you fix or add.
- **Reviewing**: check each rule against the changed elements and report findings
  as `file:line — rule — concrete failure — fix`. Only report what you verified
  in the code, not what might happen in theory.

## Rendering and lifecycle

1. **`render()` derives everything from properties and state**: status messages,
   `aria-*`, disabled buttons, progress (see `ed-speech/src/EdSpeech.ts`). Never
   change by hand what the template renders.
2. **Content built by hand from markdown goes into containers without
   bindings** (`<article></article>` in `ed-pb`, `#content` in `ed-choice`,
   `#slides` in `ed-micro`): Lit never touches them. Static markup inside the
   template uses `unsafeStatic` from `lit/static-html.js`, not a binding.
3. **Build that content in `updated()`, the first time and when its inputs
   change, not in `connectedCallback`**, which runs again each time the element
   is moved: moving must keep the learner's answers. Override
   `getUpdateComplete()` to also await it, so that `await el.updateComplete`
   means the content is ready (see `_processEmd()` in `ed-pb/src/EdPb.ts`).
4. **Mind async races.** Reset state *after* the `await` of `md2HTML`, right
   before the synchronous rebuild; when nothing is awaited (html content),
   `await null` first so that state does not change during the update that
   started the processing.
5. **Constructor: only initialize properties and listeners on the element
   itself.** Don't read or set attributes or children there: they may not exist
   yet (parser upgrade), and a constructor that adds an attribute makes
   `document.createElement()` silently return an `HTMLUnknownElement` (the
   error is reported, not thrown). An attribute that must exist as soon as the
   element is connected is set in `connectedCallback` (see
   `ed-pb/src/_EdProgressBar.ts`).
6. **Rendering is asynchronous**: code (and tests) reading the shadow DOM or a
   reflected attribute right after a change awaits `el.updateComplete`. In event
   handlers, read properties (`checked`, `value`), not attributes, which are
   reflected at the next render (see `ed-choice/src/EdChoice.ts`).

## Properties and attributes

7. **Reactive properties are declared in `static properties` with `declare`,
   and initialized in the constructor**. A class field (`value = ""`) shadows the
   Lit accessor and silently disables updates (esbuild in tests uses define
   semantics):

   ```ts
   static properties = { value: { state: true, attribute: false } };
   declare private value: string;
   constructor() {
     super();
     this.value = "";
   }
   ```

8. **Internal state is `{ state: true, attribute: false }`**: the custom
   elements manifest ignores `state` and would list it as an attribute.
9. **HTML lowercases attribute names**: a camelCase property gets an explicit
   lowercase attribute (`isHTML: { type: Boolean, attribute: "ishtml" }`). Use
   lowercase names for new attributes.
10. **Don't turn native properties into Lit properties**: `lang` stays a plain
    accessor in `ed-speech` (it is the language of the answer).
11. **Numbers from authors**: `0` is a valid value (`ifDefined(this.min)`, not
    `if (this.min)`), and teachers write French decimals (`3,14`).

## Events and listeners

12. **Listeners**: `@event` bindings in the template; listeners on the element
    itself in the constructor (`ed-choice/src/_EdInput.ts`); event delegation for
    content built by hand (`#open-label` in `ed-micro`). `edEvent` is listened to
    with `addEventListener` in `firstUpdated`: a camelCase name in a template
    goes through the HTML parser.
13. **`removeEventListener(type, this.fn.bind(this))` removes nothing**: `bind`
    creates a new function. Store the bound function in a field if it must be
    removed.
14. **Trigger grading on the meaningful event** (`change` from an input), not on
    any `click` inside the component.
15. **`edEvent` detail keeps the shared shape**: `date`, `url`, `tag`, `label`,
    `verb` (xAPI verb: `RESPONDED`, `COMPLETED`), then `score` and/or the
    response. Don't add fields that are always `undefined`. The event bubbles
    but is not `composed`: a wrapper (`ed-pb`) listens inside its own shadow root.

## Typing conventions

16. Each element class declares `declare readonly shadowRoot: ShadowRoot;`
    (attached by LitElement, never null) and registers its tag at the end of
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
17. **`!` only for the element's own template** (`querySelector("#label")!`).
    Content written by authors (markdown lists, `li`, `input`, `parentElement`)
    can be missing: check for `null` and skip or fall back.
18. No `@ts-ignore` / `@ts-nocheck` outside vendored code (`ed-survey/src/nudeui`).
    Browser APIs without DOM typings get a local
    `/// <reference types="..." />`, and libraries loaded at runtime a local
    type of the part of their API used (see `ed-speech/src/whisper.ts`).

## Styles, compatibility and accessibility

19. **Styles are `static styles = [commonSheet, css\`...\`]`**, shared by all
    instances (adopted stylesheets, no `<style>` in templates). Values used by
    several components (colors, font, math, `.user-input`) go in `commonSheet`
    (`common/src/styles.ts`). Buttons use the `.ed-button` base class; the
    submit button is the shared `submitButton()` template.
20. **CSS in shadow DOM is plain CSS**: no PostCSS custom media (`@media
    (--motionOK)`), and give a fallback to Open Props variables
    (`var(--blue-7, #1c7ed6)`).
21. **No customized built-ins** (`extends: "button"`, `is="..."`): Safari doesn't
    support them. Use an autonomous element or a styled native element.
22. **`customElements.define` must be guarded** with `customElements.get(tagName)`
    in the static `define()`.
23. **Interactive things are buttons**: keyboard reachable, with an accessible
    name. No click handler on `span`/`svg` alone.

24. **No hard-coded interface text**: buttons, messages, `aria-label`,
    `placeholder`, default questions use `t(this, "key")` from
    `common/src/i18n.ts`, with the key added in English and French (`fr` is
    typed as `Messages`, so a missing translation fails `tsc`). Numbers shown
    to learners use `formatNumber(this, n)` (`3,14` in French). The interface
    language is never the element's `lang`, which is the exercise language.

## Markdown content

25. Content is markdown unless `isHTML` is set: parse it with the dynamically
    imported `md2HTML` from `common/src/index.js`, and render it with
    `unsafeHTML` (it is written by the author). A wrapper that passes already
    parsed HTML to a child component must set `isHTML` on it.
26. The manifest analyzer runs with `--litelement` (`analyze` scripts) to read
    `static properties`: check that new attributes appear in the element's
    `custom-elements.json`, used by the documentation API tab and playground.
