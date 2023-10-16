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


## References

- [GUI Challenges dialog](https://github.com/argyleink/gui-challenges/tree/main/dialog).
- [CSS only carousel](https://css-tricks.com/css-only-carousel/)
- [Simple carousel](https://webdesign.tutsplus.com/easy-slider-carousel-with-pure-css--cms-107626t)