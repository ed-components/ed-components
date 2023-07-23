---
id: button-group
title: <button-group>
includes: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.81/dist/themes/light.css" /><script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.81/dist/shoelace.js"></script>'
---

<header>

# `<button-group>`

Group of exclusive push buttons

</header>

<main>

## Features

- Uses existing button styling present in the page
- Uses [`ElementInternals`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals) to work like a built-in form element
- Accessible
- Ultra light (3KB **unminified** and **uncompressed**!)


## Examples

Basic, no selected option:

```html
<button-group>
	<button>Design</button>
	<button>Preview</button>
</button-group>
```

Providing values:

```html
<button-group id="temporal" oninput="out.textContent = this.value">
	<button value="">None</button>
	<button value="d">Dates</button>
	<button value="t">Times</button>
	<button value="dt">Dates & Times</button>
</button-group>
<output id="out"></output>
```

Pre-selected state via `aria-pressed`:

```html
<button-group>
	<button>Design</button>
	<button aria-pressed="true">Preview</button>
</button-group>
```

Multiple:

```html
<button-group multiple oninput="button_multiple_value.textContent = this.value">
	<button value="b"><span style="font-weight: bold">B</span></button>
	<button value="i"><span style="font-style: italic">I</span></button>
	<button value="u"><span style="text-decoration: underline">U</span></button>
</button-group>
<output id="button_multiple_value"></output>
```

Participates in form submission (requires [`ElementInternals`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals) support):

```html
<form action="about:blank" target="_blank">
	<button-group name="favorite_letter">
		<button>A</button>
		<button aria-pressed="true">B</button>
		<button>C</button>
		<button>D</button>
		<button>E</button>
		<button>F</button>
		<button>G</button>
	</button-group>
	<button type=submit>Submit</button>
</form>
```

Vertical

```html
<button-group name="type" vertical>
	<button value="garlic" aria-pressed="true">Garlic</button>
	<button value="msg">MSG</button>
	<button value="salt">Salt</button>
</button-group>
```

Separate

```html
<button-group name="type" separate>
	<button>Salt</button>
	<button>Pepper</button>
	<button>Garlic</button>
	<button>Cumin</button>
	<button>Coriander</button>
	<button>Dill</button>
	<button>Parsley</button>
	<button>Turmeric</button>
</button-group>
```

Dynamically setting `element.value`:

```html
<button-group id="group1">
	<button>A</button>
	<button aria-pressed="true">B</button>
	<button>C</button>
</button-group>
<button onclick="group1.value = 'C'">Select C</button>
```

Dynamically adding `aria-pressed` attribute:

```html
<button-group id="group2">
	<button>A</button>
	<button aria-pressed="true">B</button>
	<button>C</button>
</button-group>
<button onclick="group2.children[2].setAttribute('aria-pressed', 'true')">Select C</button>
```

Dynamically adding options:

```html
<button-group id="group3">
	<button>1</button>
	<button>2</button>
	<button aria-pressed="true">3</button>
</button-group>
<button onclick="window.counter ||= 3; group3.insertAdjacentHTML('beforeend', `<button aria-pressed=true>${++counter}</button>`)">Add option</button>
```

[WIP](https://twitter.com/LeonieWatson/status/1547544701036888065):
`<button-group>` has an implicit ARIA Role of `region`, so adding an `aria-label` should make it work as a landmark out of the box
(requires [`ElementInternals`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals) support):

```html
<button-group aria-label="View switcher">
	<button>Design</button>
	<button aria-pressed="true">Preview</button>
</button-group>
```

Regular labels should work too (requires [`ElementInternals`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals) support):

```html
<label for="view-switcher">View:</label>
<button-group id="view-switcher">
	<button>Design</button>
	<button aria-pressed="true">Preview</button>
</button-group>
```

You don't even need to use an actual `<button>`, [custom elements](https://shoelace.style/components/button?id=css-parts)
should work too
(presentation needs work, but functionality is there):

```html
<style>
sl-button[aria-pressed="true"]::part(base) {
	background: var(--sl-color-primary-100);
	border-color: var(--sl-color-primary-300);
}
</style>
<button-group>
	<sl-button>1</sl-button>
	<sl-button aria-pressed="true">2</sl-button>
	<sl-button>3</sl-button>
</button-group>
```

</main>