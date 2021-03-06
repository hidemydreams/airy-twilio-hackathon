import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App/App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/React">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
