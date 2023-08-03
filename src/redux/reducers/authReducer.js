import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../action/action-type";

const initialState={
    token:null,
    isAuthenticated:false
};

export const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS :
            return{...state,token:action.payload,isAuthenticated:true}
        case LOGOUT_SUCCESS:
            return{...state,token:null,isAuthenticated:false}
        default :
            return state;
    }
}