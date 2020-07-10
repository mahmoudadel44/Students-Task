import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store";
import App from "./App";
import "./i18next";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
<Suspense fallback={<h1></h1>}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    </Suspense>,
  document.getElementById("root")
);

serviceWorker.unregister();
