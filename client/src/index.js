import React from "react";
import ReactDOM from "react-dom";
import "./i18n";
import ErrorBoundary from "./ErrorBoundary";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import createStore from "./redux/store/configuerStore";
import "./index.css";
import App from "./App";
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
