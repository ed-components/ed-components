## Usage

This wrapper component allows to easily write problems with ed-components.

Some specific markdown is wrapped inside an adapted ed-components.

1. Task-list are wrapped into `<ed-choice>` for single and multiple-choice
   answers.
2. Unordered lists with `score` metadata(`:100:`) are wrapped into `<ed-ans>`
   for text answers.
3. Unordered lists with `num` metadata(`:num:`) are wrapped into `<ed-num>` for
   numeric answers.

```html
<ed-pb>
# You can include a title

## Exercice

> This is a note. Who'd have noted?

1.  Each numeric element list  is turned into a question.

    You can provide some context, and even include sub-questions.

    Under the hood the two sub-answers here use `ed-choice` component.

    
    1. Subquestion 2.1.

       A gfm task-list with _one checked answer_ will be turned into a **single choice question**.

       - [ ] first false answer
       - [x] This is true
       - [ ] third false answer
    
    1. Subquestion 2.2.

       A gfm task-list with _more than one checked answer_ will be turned into a **multiple choice question**.

       - [ ] first false answer
       - [x] This is true
       - [x] This is also true
       - [ ] false also

    However you can use unordered lists in your markdown content. 
    
    - Hello
    - World

1. Here is the second question, don't bother about which is the right number,
   markdown oredred lists handle this natively.

   This time, we'll use
   [nlp](https://en.wikipedia.org/wiki/Natural_language_processing) to score the
   answer of the student.

   Under the hood it uses `<ed-ans>` component.

   What is the capital of France?

   > You must write a sentence. 

   - :100: Paris is the capital of France.
   - :100: The capital of France is Paris.
   - :50: Paris.

1. You can also use `ed-num` component for numeric answers.
   
   1. How many Wonders of the ancient World were present during classical
      antiquity?

      - :num: 7

   1. How many Wonders of the ancient World are still in existence?

      - :num: 1
       
</ed-pb>
```

### `emd` attribute

You can provide the `emd` content as an attribute to allow re-rendering the component on change. In that case, **`innerHTML` content is totally ignored**.

```html
<ed-pb emd="# Hello emd
1. Are you happy with educational markdown?
   - [x] Yes
   - [ ] No">
_This content wiil not be used_
</ed-pb>
```

## Credits

This component rely on [micromark](https://github.com/micromark) to parse
markdown in the client-side.