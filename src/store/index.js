import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import thunk from "redux-thunk";
import reducers from "../reducers/index";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "primary",
  storage,
  blacklist: ["retailer"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export { store, persistor };
