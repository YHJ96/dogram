import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { ResetStyle } from "./ResetStyle";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.Fragment>
    <ResetStyle />
    <App />
  </React.Fragment>
);