## Usage

The answer attribute holds the correct answer.

```html
<ed-pb>
# You can include a title

## Exercice

> This is a note. Who'd have noted?

1.  Each numeric element list  is turned into a question.

    You can provide some context.

    :::ed-speech
    Say hello
    :::

1.  Question 2.

    Directives are provided for each ed-component.
    
    1. Subquestion 2.1.

       If the answer is a gfm task-list it will be turned into a single choice question.

       :::ed-sc

       - [ ] first false answer
       - [x] This is true
       
       :::
    
:::ed-survey
Did you like this problem?
:::
</ed-pb>
```


## Credits

This component rely on [micromark](https://github.com/micromark) to parse
markdown in the client-side.