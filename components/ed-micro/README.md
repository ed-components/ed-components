## Usage


```html
<ed-micro label="Awesome micro-content">
## My micro content

It has been proven that is better to chunk content to faciliate memorization.

## Split content

Ok.
</ed-micro>
```

If no label is provided it will use first child as label.

```html
<ed-micro>
## My micro content

It has been proven that is better to chunk content to faciliate memorization.

## Split content

Ok.
</ed-micro>
```

Each header is used as delimiter for slide separation, but you can also add
horizontal rules.

```html
<ed-micro>
## My micro content

It has been proven that is better to chunk content to faciliate memorization.

---

This content is in its own slide.

## Split content

Ok.
</ed-micro>
```

You can use another ed-components inside ed-micro component.

```html
<ed-micro>
## Let's test

<ed-pb>
    
> This is a note. Who'd have noted?

1.  Each numeric element list  is turned into a question.

    You can provide some context

    
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
</ed-pb>

--- 

This content is in its own slide.

## Split content

Ok.
</ed-micro>
```


## References

- [GUI Challenges dialog](https://github.com/argyleink/gui-challenges/tree/main/dialog).
- [CSS only carousel](https://css-tricks.com/css-only-carousel/)
- [Simple carousel](https://webdesign.tutsplus.com/easy-slider-carousel-with-pure-css--cms-107626t)