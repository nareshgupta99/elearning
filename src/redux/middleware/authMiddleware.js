// middleware/authMiddleware.js

import { INIT, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../action/action-type';
import { loginSuccess, logoutSuccess } from '../action/authActions';
import { removeAllFromCart } from '../action/cartActions';



export const saveTokenMiddleware = (store) => (next) => (action) => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('token', action.payload);

  } else if (action.type === LOGOUT_SUCCESS) {
    localStorage.removeItem('token');
  }
  next(action);
};

export const checkTokenMiddleware = (store) => (next) => (action) => {
  if (action.type === INIT) {
    const token = localStorage.getItem('token');
    if (token) {
      store.dispatch(loginSuccess(token));
    } else {
      store.dispatch(logoutSuccess());
    }
  }
  next(action);
};

 const logoutMiddleware=(store)=>(next)=>(action)=>{
  if(action.type === LOGOUT_SUCCESS){
    store.dispatch(removeAllFromCart());
  }
  next(action);
};



export {logoutMiddleware}
