## Installation

_Installation_

```sh
npm i ed-sc
```



_Import from NPM_

```html
<script type="module" src="node_modules/ed-sc/index.js"></script>
```

_Import from CDN_ **TODO**

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/???gh/????/ed-sc/index.js"
></script>
```

## Usage

### Basic Usage

The `ed-sc` element accepts [gfm markdown](https://github.github.com/gfm/) for
it's content. Each
[task-list](https://github.github.com/gfm/#task-list-items-extension-) is turned
into a single choice question.

TODO: can it accept multiple questions? multiple answers?

```html
<ed-sc>
  Do you love pizzas?

  - [ ] First _false_ answer
  - [x] Second **true** answer
  - [ ] Third _false_ answer
  - [ ] LONG ANSWER: Third _false_ answer Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Laboriosam, accusamus. Iste beatae
    necessitatibus quibusdam odit quas nobis rerum nesciunt harum modi
    exercitationem reprehenderit, quisquam tenetur sint maxime consequuntur?
    Adipisci, fuga.
        
</ed-sc>
```

## References

- [Edx single select problem OLX](https://edx.readthedocs.io/projects/)open-edx-building-and-running-a-course/en/latest/exercises_tools/single_select.html#single-select-problem-olx-reference
- [Inclusively Hiding & Styling Checkboxes and Radio Buttons](https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/)
- [Animated Checkboxes and Radio Buttons with SVG](https://tympanus.net/codrops/2013/10/15/animated-checkboxes-and-radio-buttons-with-svg/)
