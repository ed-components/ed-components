import "./style.css";
import typescriptLogo from "./typescript.svg";
import { Header, Counter, setupCounter } from "ui";
import StopWatchElement from "stop-watch";

StopWatchElement.define()

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    ${Header({ title: "Docs" })}
    <div class="card">
      ${Counter()}
    </div>
    <stop-watch role="timer"></stop-watch>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
