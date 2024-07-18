import { ADD_TO_CART, CHECK_CART, EMPTY_CART, REMOVE_FROM_CART } from "./action-type";

export function addToCart(course){
    console.log(1);
    return {type:ADD_TO_CART, payload:course};
}

export function removeFromCart(courseId){
    return {type:REMOVE_FROM_CART,payload:courseId};
}

export function checkCart(courses){
    return {type:CHECK_CART,payload:courses};   
}

export function emptyCart(){
    return {type:EMPTY_CART};
}
