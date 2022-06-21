import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import Provider pour donner l' accés au store a l'application
import { Provider } from "react-redux";
//import le store
import { store } from "./service/store.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


