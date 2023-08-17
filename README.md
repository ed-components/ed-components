# ed-components

> Teach, learn, explore new possibilities in education with these web
> components.

## White book

ed-components are implemented as web-components and can be used in
the client-side without any server.

A configurable demo is provided for teachers that do not want to install
anything. Fill a form and submit it to get a shareable url with the form data
encoded in the url.

ed-components emit events in order to be used in server apps.

ed-components can be exported to various formats using [pandoc]()

An open-source library of contents is published as a git repo.

## events

Use https://www.xapijs.dev/ verbs.

Each component emits Custom `EdEvents` that can be accessed in the `details` attribute.


```
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

Each `html` source code starting with `<ed-` is turned into a interactive demo.

## TODO

- DOC implement search with [Pagefind](https://pagefind.app/)
