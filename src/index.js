import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* Redux Connections */
import rootReducer from "./redux/reducers/rootReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import promiseMiddleware from "redux-promise";

/* LocalStorage Functions */
import { loadState } from "./redux/LocalStorage";
import { saveState } from "./redux/LocalStorage";

const persistedState = loadState();
const middleware = [thunk];
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(promiseMiddleware, ...middleware))
);

store.subscribe(() => {
  saveState({
    changed: store.getState().changed,
    Devices: store.getState().Devices
  });
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
