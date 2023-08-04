import {
  applyMiddleware,
  combineReducers,
  configureStore,
  createStore,
} from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {
  checkTokenMiddleware,
  saveTokenMiddleware,
} from "./middleware/authMiddleware";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({ auth: authReducer, cart: cartReducer });

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk, saveTokenMiddleware, checkTokenMiddleware)
);

export default store;
