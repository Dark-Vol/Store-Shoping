import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterSystem from './RouterSystem';
import "./scss/Main.scss";

const rootElem = document.getElementById("root");
if (!rootElem) {
  throw new Error("root element not found");
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <RouterSystem />
    </React.StrictMode>
  </BrowserRouter>
);