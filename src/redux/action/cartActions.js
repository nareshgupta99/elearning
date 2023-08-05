import { ADD_TO_CART, CHECK_CART, REMOVE_FROM_CART } from "./action-type";

export function addToCart(course){
    return {type:ADD_TO_CART, payload:course}
}

export function removeFromCart(courseId){
    console.log("1 action remove")
    console.log(courseId)
    return {type:REMOVE_FROM_CART,payload:courseId}
}

export function checkCart(courses){
    return {type:CHECK_CART,payload:courses};
    
}
