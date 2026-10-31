<!-- ## Installation

_Installation_

```sh
npm i ed-choice
```



_Import from NPM_

```html
<script type="module" src="node_modules/ed-choice/index.js"></script>
```

_Import from CDN_ **TODO**

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/???gh/????/ed-choice/index.js"
></script>
``` -->

## Usage

### Basic Usage

The `ed-choice` element accepts [gfm markdown](https://github.github.com/gfm/) for
it's content. Each
[task-list](https://github.github.com/gfm/#task-list-items-extension-) is turned
into a single choice question.

If only one element is checked it will be turned into a single-choide question with instant feedback.

```html
<ed-choice>
  Do you love pizzas?

  - [ ] First _false_ answer
  - [x] Second **true** answer
  - [ ] Third _false_ answer
  - [ ] LONG ANSWER: Third _false_ answer Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Laboriosam, accusamus. Iste beatae
    necessitatibus quibusdam odit quas nobis rerum nesciunt harum modi
    exercitationem reprehenderit, quisquam tenetur sint maxime consequuntur?
    Adipisci, fuga.
        
</ed-choice>
```

If more than one answer is checked a submit button is added to allow the choice of multiple answers.

```html
<ed-choice>
  Who are the best guitarsits of history.

  - [x] Jimi Hendrix
  - [ ] Your teacher
  - [x] Jeff Beck
        
</ed-choice>
```

### Feedbacks

A blockquote under an answer is the feedback of this answer, and a blockquote
right after the list is the feedback of the question, such as the solution.
They are shown once the learner answered: the feedback of each chosen answer,
as correct or incorrect, and the feedback of the question.

```html
<ed-choice>
  What is $E$ in $E=mc^2$?

  - [ ] mass
    > No, $m$ is the mass.
  - [x] energy
    > Yes, $E$ is the energy.
  - [ ] entropy
    > No, entropy is usually written $S$.

  > $E$ is the energy, $m$ the mass and $c$ the speed of light.
</ed-choice>
```

## OLX compatibility

[Edx single select problem OLX](https://edx.readthedocs.io/projects/open-edx-building-and-running-a-course/en/latest/exercises_tools/single_select.html#elements)
can include this hierarchy of child elements.

```
<multiplechoiceresponse>      <ed-choice shuffle="true">
    <label>                   This is my label
    <description>             > optional description
    <choicegroup>             
          <choice>            - [x] True answer
              <choicehint>      > Optional choice hint
                              - [ ] False answer
                                > Optional choice hint
    
    <solution>                > solution
<demandhint>
    <hint>                    - optional additional information that learners can access if needed.
                              </ed-choice>
```

Choice hints and the solution are [feedbacks](#feedbacks).

**TODO**

- attributes for label, description and hints
- allow to define attributes in yaml header
- script tag to generate all question as a json object.

## References


- [Inclusively Hiding & Styling Checkboxes and Radio Buttons](https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/)
- [Animated Checkboxes and Radio Buttons with SVG](https://tympanus.net/codrops/2013/10/15/animated-checkboxes-and-radio-buttons-with-svg/)
