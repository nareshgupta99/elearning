import { ADD_TO_CART, REMOVE_FROM_CART } from "./action-type";

function addToCart(courseId){
    return {type:ADD_TO_CART, payload:courseId}
}

function removeFromCart(courseId){
    return {type:REMOVE_FROM_CART,payload:courseId}
}