import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./ErrorBoundary";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import createStore from "./redux/store/configuerStore";
import App from "./App";
import "./i18n";
import "animate.css";
import "./index.css";

const store = createStore();
ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
/* const container = document.getElementById("root");
ReactDOM.hydrateRoot(
  container,
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>
);
 */