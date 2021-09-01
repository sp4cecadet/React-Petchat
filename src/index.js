import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { userActions } from "redux/actions";
import store from "redux/store";

import "./styles/index.scss";

if (localStorage.token) {
  store.dispatch(userActions.setUserData(localStorage.token));
}

store.dispatch(userActions.fetchUserData());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
