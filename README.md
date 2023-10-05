# ed-components

> Teach, learn, explore new possibilities in education with these web
> components.

- **Easy to write** with a
  [Lightweight markup language](https://en.wikipedia.org/wiki/Lightweight_markup_language)
  based on [Markdown](https://en.wikipedia.org/wiki/Markdown).
- **Easy to use**, it can be used without any server with a simple Web browser.
- **Easy to share, save and reuse** with a file based approach, no server required.

## White book

ed-components are implemented as web-components and can be used in
the client-side without any server.

ed-components could be integrated in any LMS or CMS with server-side hydration
and server-side grading thanks to
[DOM Events](https://developer.mozilla.org/en-US/docs/Web/API/Event).

A playground is provided for teachers that do not want to install
anything. Fill a form and submit it to get a shareable url with the form data
encoded in the url.

ed-components emit events in order to be used in server apps.

ed-components can be exported to various formats using [pandoc](https://pandoc.org/).

An open-source library of contents is published as a git repo.

## Syntax

Problems are easy to write thanks to a markdown like syntax which will turn your
text into the interactive html `ed-components`.

For example:

```html
# Eisntein formula

We remind you that $$E=m c^2$$

1. What means $E$ in this formula?


   :::ed[sc]
   - [ ] empty
   - [x] energy
   - [ ] entropy
   :::

```

See [`ed-pb`](./components/ed-pb/) for more information.

## events

Use https://www.xapijs.dev/ verbs, see <https://doc.xapi.fr/profiles/xapi/taxonomy/verbs>

Each component emits Custom `EdEvents` that can be accessed in the `details` attribute.


```json
{
  "date": "2023-08-17T13:58:11.038Z",
  "url": "http://localhost:8080/components/ed-quiz/",
  "edc": "_EdQuiz",
  "title": "Quiz",
  "verb": "RESPONDED",
  "question": 2,
  "answer": 2
}
```

## Documentation

The website is build using eleventy. Each `README.md` file is turned into a `html` page.

Each `html` source code starting with `<ed-` is turned into an interactive demo.

## Syntax overview

Ed components are sort of cousin of
[Open Edx Problems](https://edx.readthedocs.io/projects/open-edx-building-and-running-a-course/en/latest/exercises_tools/numerical_input.html#numerical-input-problem-olx-reference).

Open edx use `olx` an xml format to describe problems. As much as possible
`ed-components` follows the vocabulary used in `olx`, enabling an easy
conversion of ed-components content to olx to be used in edx platforms.

However, `ed-components` goal is simplicity, so information is embedded in a
[Lightweight markup language](https://en.wikipedia.org/wiki/Lightweight_markup_language)
based on [Markdown](https://en.wikipedia.org/wiki/Markdown).

Also, as `ed-components` can be used in the client-side,
[script](https://edx.readthedocs.io/projects/open-edx-building-and-running-a-course/en/latest/exercises_tools/custom_python.html#)
programmatic graders should use javascript instead of python.

## References

- [Web components Guide](https://webcomponents.guide)
- [Open UI](https://open-ui.org/research/component-matrix/) for presentational content.
- [zoo-web-components](https://github.com/zooplus/zoo-web-components/tree/master)
  bundle vanilla web-components with shared part.

## Roadmap

1. Enable blank lines in ed components children of ed-quiz.
2. Docs: implement search with [Pagefind](https://pagefind.app/)
3. DEV: Try `bun` instead of pnpm.
