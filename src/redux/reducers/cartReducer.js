
import { getAllItemFromCart } from "../../service/CartService";
import { ADD_TO_CART, CHECK_CART, EMPTY_CART, REMOVE_FROM_CART } from "../action/action-type";

const initialState={
   courses:[]
}

export const cartReducer= (state=initialState,action)=>{
    let courses;
    switch(action.type){
        case ADD_TO_CART:
            console.log(3);
            return {
                ...state,
                courses:[...state.courses,action.payload]
            }
        case REMOVE_FROM_CART:
            let updatedCourse=state.courses.filter((c)=>c.id!==action.payload)
            return {...state,courses:updatedCourse}
        case CHECK_CART:
            courses=action.payload;
            return {...state.courses,courses}
        case EMPTY_CART:
            courses=[];
            return {...state,courses:courses};

        default :
            return state;
    }

}