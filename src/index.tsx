import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import "./reset.css"
import store from "store/store";
import "jalaali-react-date-picker/lib/styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);
