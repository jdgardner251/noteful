import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import STORE from './store';

ReactDOM.render(
  <BrowserRouter>
    <App store={STORE} />
  </BrowserRouter>,
  document.getElementById("root")
);
