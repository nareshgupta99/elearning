import { privateAxios } from "./helper"


export function addItemToCart(courseId){
    return privateAxios.post(`/cart/course/add/${courseId}`);
}


export function getAllItemFromCart(){
    return privateAxios.get("/cart/courses");
}

export function removeItemFromCart(courseId){
    return privateAxios.delete(`/cart/course/${courseId}`);
}