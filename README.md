# ed-components

> Teach, learn, explore new possibilities in education with these web
> components.

## White book

ed-components are implemented as web-components and can be used in
the client-side without any server.

A playground is provided for teachers that do not want to install
anything. Fill a form and submit it to get a shareable url with the form data
encoded in the url.

ed-components emit events in order to be used in server apps.

ed-components can be exported to various formats using [pandoc]()

An open-source library of contents is published as a git repo.

## events

Use https://www.xapijs.dev/ verbs.

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

## TODO

- DOC implement search with [Pagefind](https://pagefind.app/)


## Syntax overview

Ed components are sort of cousin of
[Open Edx Problems](https://edx.readthedocs.io/projects/open-edx-building-and-running-a-course/en/latest/exercises_tools/numerical_input.html#numerical-input-problem-olx-reference).

Open edx use `olx` an xml format to describe problems. As much as possible
`ed-components` follows the vocabulary used in `olx`, allowing in the future to
be ablde to convert ed-components content to olx to be used in edx platforms.

However, `ed-components` goal is simplicity, so information is embedded in a
[Lightweight markup language](https://en.wikipedia.org/wiki/Lightweight_markup_language)
based on [Markdown](https://en.wikipedia.org/wiki/Markdown).

## References

- [Open UI](https://open-ui.org/research/component-matrix/) for presentational content.
- [zoo-web-components](https://github.com/zooplus/zoo-web-components/tree/master)
  bundle vanilla web-components with shared part.
