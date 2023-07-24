---
id: ed-survey
---

## Usage

```html
<h1>ed-survey component demo</h1>
<ed-survey> Do you understand what is a web-component? </ed-survey>

<ed-survey type="rating">
  <p>Do you prefer <strong>rating</strong> surveys?</p>
</ed-survey>
// TODO don't work on demo
<script>
  document.querySelectorAll('ed-survey').forEach(el =>
    el.addEventListener('edEvent', e => {
      console.log(e.detail);
    })
  );
</script>
```

## Credits

This component uses [nudeui](https://github.com/LeaVerou/nudeui/) `vu-rating`
web component written by Léa Verou under MIT. Retrieved 2023-07-08.

<header>

# `<nd-rating>`

Like [`<meter-discrete>`](../meter-discrete/), but editable. Useful to display and set ratings etc.

</header>

<main>

## Features

- All features of [`<meter-discrete>`](../meter-discrete/), plus:
- Uses [`ElementInternals`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals) to work like a built-in form element
- Keyboard accessible (use arrow keys)
- Ultra light (3KB **unminified** and **uncompressed** + another 3KB for `<meter-discrete>`)

## Examples

Basic

```html
<nd-rating max="5" value="3.5"></nd-rating>
<button
  onclick="this.previousElementSibling.readonly = !this.previousElementSibling.readonly"
>
  Toggle readonly
</button>
```

With step

```html
<nd-rating max="5" value="3.5" step="0.1" style="font-size: 200%"></nd-rating>
```

Different styles

```html
<style>
  #minimal_rating {
    font-size: 200%;
  }

  #minimal_rating::part(value),
  #minimal_rating::part(inactive) {
    filter: contrast(0%) sepia() hue-rotate(140deg);
  }

  #minimal_rating::part(inactive) {
    opacity: 0.5;
  }
</style>
<nd-rating
  id="minimal_rating"
  max="5"
  value="2.5"
  step="0.5"
  icon="💜"
></nd-rating>
```

Actual image instead of emoji:

```html
<nd-rating value="3.5" icon="../logo.svg"></nd-rating>
```

Participates in form submission (requires [`ElementInternals`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals) support):

```html
<form action="about:blank" target="_blank">
  <nd-rating name="myrating"></nd-rating>
  <button type="submit">Submit</button>
</form>
```

</main>
