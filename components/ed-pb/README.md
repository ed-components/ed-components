## Usage

This wrapper component allow to easily write problems with ed-components.

Some specific markdown is wrapped inside an adapted ed-components.

1. task-list are wrapped into `<ed-choice>`.

```html
<ed-pb>
# You can include a title

## Exercice

> This is a note. Who'd have noted?

1.  Each numeric element list  is turned into a question.

    You can provide some context, and even include sub-questions.

    
    1. Subquestion 2.1.

       A gfm task-list with _one checked answer_ will be turned into a **single choice question**.

       - [ ] first false answer
       - [x] This is true
    
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

   What is the capital of France?

   > You must write a sentence. 

   - :100: Paris is the capital of France.
   - :100: The capital of France is Paris.
   - :50: Paris.
       
</ed-pb>
```


## Credits

This component rely on [micromark](https://github.com/micromark) to parse
markdown in the client-side.