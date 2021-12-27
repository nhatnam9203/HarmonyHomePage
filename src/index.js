// import "./wdyr";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";

import i18n from "./language/i18n";

import { store } from "./store";

import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
        <CookiesProvider>
          <App />
        </CookiesProvider>
    </Provider>
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
