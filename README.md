# ed-components

> Teach, learn, explore new possibilities in education with these web
> components.

- **Easy to write** with a
  [Lightweight markup language](https://en.wikipedia.org/wiki/Lightweight_markup_language)
  based on [Markdown](https://en.wikipedia.org/wiki/Markdown).
- **Easy to use**, it can be used without any server with a simple Web browser.
- **Easy to share, save and reuse** with a file based approach, no database required.

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

For example using the `<ed-choice>`  let you easily write choices questions like this.

```html
<ed-choice>
# Einstein formula

We remind you that $$E=m c^2$$

What means $E$ in this formula?

   - [ ] empty
   - [x] energy
   - [ ] entropy
</ed-choice>
```

See [`ed-choice`](./components/ed-choice/) for more information.

## Internationalization

The interface of the components (buttons, messages, accessible labels) is in
English or French. Its language is the `ui-lang` attribute of the component or
of an ancestor, else the page language (`<html lang="fr">`), else English. The
`lang` attribute of a component is the language of the exercise, not of the
interface: a Spanish `<ed-speech lang="es">` in a French page talks French.

```html
<html lang="fr">
  ...
  <ed-pb ui-lang="en">…</ed-pb>
</html>
```

Messages can be changed, or another language added, with `registerMessages`
(missing messages fall back to English):

```js
import { registerMessages } from "@ed-components/ed-components";

registerMessages("fr", { submit: "Valider" });
registerMessages("de", { submit: "Prüfen", progress: "Fortschritt" });
```

The message keys are listed in `components/common/src/i18n.ts`.

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

Run `pnpm start` to work on the site at <http://localhost:8080>: it rebuilds
the components, styles and pages on each change.

### Formatting

JavaScript and TypeScript are formatted, with sorted imports, by
[Biome](https://biomejs.dev): run `pnpm format`, or `pnpm format:check` to
only check. To format the staged files on each commit, install the git hooks
of `.pre-commit-config.yaml` with [prek](https://prek.j178.dev) or
[pre-commit](https://pre-commit.com): `prek install` or `pre-commit install`.
A commit whose files the hook changed fails: stage them again and commit.

### Testing on a phone

Browsers only give access to the microphone (`ed-speech`) on secure pages:
https, or `localhost`. Opening the dev server with the computer's IP address
(`http://192.168.x.x:8080`) does not work, so the site is exposed through an
https tunnel with [localtunnel](https://theboroer.github.io/localtunnel-www/):

1. Run `pnpm start:mobile`, which runs `pnpm start` and the tunnel together
   (or `pnpm tunnel` when `pnpm start` is already running).
2. Open the `https://….loca.lt` URL printed in the terminal on the phone.
3. On the first visit, the tunnel page asks for a password: the public IP of
   the computer, shown by <https://loca.lt/mytunnelpassword> opened on the
   computer.

While the tunnel is open, anyone with its URL can reach the dev server: stop
it after testing.

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

## Release

The changelog and versions are managed with [Changesets](https://changesets.dev):

1. With each user facing change, run `pnpm changeset`: pick the bump type
   (`patch`, `minor`, `major`) and describe the change for the package users.
   This adds a file in `.changeset/` to commit with the change.
2. To release, run `pnpm release:version`: it bumps the version of
   `components/package.json` and writes `components/CHANGELOG.md` from the
   pending changesets. Review them and commit (`vX.Y.Z`).
3. Run `pnpm release:tag` then `pnpm release:push`. It pushes `main` with the
   `vX.Y.Z` tag, which triggers the GitHub workflow that publishes the package
   to npm, and moves the `release` branch to the tagged commit.

The documentation site is deployed by Netlify from the `release` branch, so it
always matches the version published on npm (`main` may contain unreleased
changes).

The workflow publishes with npm
[trusted publishing](https://docs.npmjs.com/trusted-publishers) (no npm token):
the package settings on npmjs.com must trust the GitHub repository
`ed-components/ed-components` and the workflow `npm-publish.yml`.

## References

- [Web components Guide](https://webcomponents.guide)
- [Open UI](https://open-ui.org/research/component-matrix/) for presentational content.
- [zoo-web-components](https://github.com/zooplus/zoo-web-components/tree/master)
  bundle vanilla web-components with shared part.

## Roadmap

1. Enable blank lines in ed components children of ed-quiz.
2. Docs: implement search with [Pagefind](https://pagefind.app/)
3. DEV: Try `bun` instead of pnpm.
