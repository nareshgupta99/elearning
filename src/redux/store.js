import {
  applyMiddleware,
  combineReducers,
  compose,
 
  createStore,
} from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";

import thunk from "redux-thunk";
import {
  checkTokenMiddleware,
  saveTokenMiddleware,
  logoutMiddleware
} from "./middleware/authMiddleware";

import { cartReducer } from "./reducers/cartReducer";
import { checkCartMiddleware, saveCourseMiddleware } from "./middleware/catMiddleware";

const rootReducer = combineReducers({ auth: authReducer, cart: cartReducer });
// Use Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(

    applyMiddleware( thunk, saveTokenMiddleware,  checkTokenMiddleware ,saveCourseMiddleware, checkCartMiddleware,logoutMiddleware)
    )
  
);

export default store;
