import { applyMiddleware, compose, createStore } from "redux";

import thunk from "redux-thunk";
import reducers from "../reducers/index";

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export { store };
