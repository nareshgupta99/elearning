import { privateAxios } from "./helper";

export function getAllOrders(){
    return privateAxios.get("/orders/all");
}