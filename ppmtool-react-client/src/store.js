import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initalState = {};
const middleware = [thunk];

let store;

if (window.navigator.userAgent.includes("Chrome")) {
  let store = createStore(
    rootReducer,

    initalState,

    compose(applyMiddleware(...middleware))
  );
} else {
  let store = createStore(
    rootReducer,

    initalState,

    compose(applyMiddleware(...middleware))
  );
}

export default store;
