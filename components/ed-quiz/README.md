---
id: ed-quiz
---

# <ed-quiz>

> A web component for quiz using markdown gfm checklists.

## Installation

_Installation_

```sh
npm i ed-quiz
```

_Import from NPM_

```html
<script type="module" src="node_modules/ed-quiz/index.js"></script>
```

_Import from CDN_ **TODO**

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/???gh/????/ed-quiz/index.js"
></script>
```

## Usage

<!--
Attributes

- title - the title that displays on the card
- type - the content type ()
-->

<!--


Properties

- title - the title that displays on the card
- type - the content type ()
-->

### Basic Usage

<!-- description -->

```html
<ed-quiz title="My wonderful quiz">
  --- 
  title: My wonderful quiz
  description: A quiz to test the web component wc-quiz.
  progress: true
  results: true
  subject: Computer programming
  level: High School
  tags: ["quiz", "web-components", "html"]
  ---

  ## `mdquiz` example

  ![raspberries](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Raspberry_-_whole_%28Rubus_idaeus%29.jpg/220px-Raspberry_-_whole_%28Rubus_idaeus%29.jpg)

  Note that there is **only one true answer per question**.

  1. This is a _question_.

      - [x] `True`
      - [ ] `False`

  1. Another QCM

      - [ ] First _false_ answer
      - [x] Second **true** answer
      - [ ] Third _false_ answer
      - [ ] LONG ANSWER: Third _false_ answer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, accusamus. Iste beatae necessitatibus quibusdam odit quas nobis rerum nesciunt harum modi exercitationem reprehenderit, quisquam tenetur sint maxime consequuntur? Adipisci, fuga.
  
  1. Some inline maths $\eta = \frac{m}{G_m}$, and display mode:

      $$
      L = \frac{1}{2} \rho v^2 S C_L
      $$

      - [x] true
      - [ ] false
</ed-quiz>
```


## Special thanks

- Web component architecture: https://github.com/vanillawc/wc-markdown/

## micromark-plugins

This web componenent uses `micromark` to render markdown to html in the browser _lightly_, it uses:

- `micromark-extension-math` associated with kayex to render tex math to mathhml.
- micromark-extension-frontmatter: TODO Utile ou non?

## References

- https://github.com/syntax-tree/mdast
- https://github.com/syntax-tree/hast
- https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/
- https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/

Progressbar: https://getbootstrap.com/docs/5.0/components/progress/#keyframes
