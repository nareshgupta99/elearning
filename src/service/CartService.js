import { privateAxios } from "./helper"


export function addItemToCart(courseId){
    return privateAxios.post(`/cart/${courseId}`)
}
