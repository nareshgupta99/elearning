
import { ADD_TO_CART, CHECK_CART, REMOVE_FROM_CART } from "../action/action-type";

const initialState={
   courses:[]
}

export const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return {...state,
                courses:[...state.courses,action.payload]
            }
        case REMOVE_FROM_CART:
            let updatedCourse=state.courses.filter((c)=>c.courseId!=action.payload)
            return {...state,courses:updatedCourse}
        case CHECK_CART:
            let courses=action.payload;
            return {...state.courses,courses}
        default :
            return state;
    }

}