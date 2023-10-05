# Design

## Theme colors

From [open-props](https://open-props.style/#colors).

Used in logo:

```css
var(--violet-5, #845ef7)
var(--blue-5, #339af0)
var(--indigo-5, #5c7cfa)
```

## Logo

Created in svg with font Noto Sans and converted to path with inkscape.

```sh
inkscape design/logo.svg --export-text-to-path --export-filename _assets/logo.svg
```

Convert to png: TODO color is not correctly handled.

```sh
inkscape design/logo.svg -w 1024 -h 1024  --export-png-color-mode=RGBA_8 --export-filename _assets/logo.png
```
