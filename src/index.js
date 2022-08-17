import React from "react";
import ReactDOM from "react-dom/client";
import Loding from "./components/Loding";
import { ResetStyle } from "./ResetStyle";

const App = React.lazy(() => import("./page/App"));

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.Suspense fallback={<Loding />}>
    <ResetStyle />
    <App />
  </React.Suspense>
);