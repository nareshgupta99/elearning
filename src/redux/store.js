import {
  applyMiddleware,
  combineReducers,
  compose,
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
import { checkCartMiddleware, saveCourseMiddleware } from "./middleware/catMiddleware";

const rootReducer = combineReducers({ auth: authReducer, cart: cartReducer });
// Use Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(

    applyMiddleware( thunk, saveTokenMiddleware,  checkTokenMiddleware ,saveCourseMiddleware, checkCartMiddleware,)
    )
  
);

export default store;
