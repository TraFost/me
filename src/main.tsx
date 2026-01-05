import { render } from "preact";
import { App } from "./app";

import "./index.css";

const container = document.querySelector("#app") as Element;

render(<App />, container);
