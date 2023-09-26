## Usage

The answer attribute holds the correct answer.

```html
<ed-pb>
# You can include a title

## Exercice

> Include any markdown you want, like this _quote_.

1.  Each numberic element list  is turned into a question.

    You can provide some context.

    :::answer
    This is a simple text content, the correct answer you wait for.
    :::

1.  Question 2.
    
    1. Subquestion 2.1.

       If the answer is a gfm task-list it will be turned into a single choice question.

       :::answer
       - [ ] first false answer
       - [x] This is true
       :::
</ed-pb>
```


## Credits

This component rely on [micromark](https://github.com/micromark) to parse
markdown in the client-side.