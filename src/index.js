import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./styles/Global.scss";
const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(<App />);
