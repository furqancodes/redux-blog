import React from "react";
import reactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./components/App.jsx";
import combineReducers from "./reducers/index";

reactDOM.render(
  <Provider store={createStore(combineReducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById("root")
);
