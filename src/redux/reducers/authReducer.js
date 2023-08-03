import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SET_ROLES,
} from "../action/action-type";

const initialState = {
  token: null,
  isAuthenticated: false,
  roles: []
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload, isAuthenticated: true };
    case LOGOUT_SUCCESS:
      return { ...state, token: null, isAuthenticated: false };
    case SET_ROLES:
      return {...state,roles: action.payload,  }; // Update the roles in the state
    default:
      return state;
  }
};
