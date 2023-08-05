import { privateAxios } from "./helper";

export function initiatePayment(formData){
   return  privateAxios.post('/payment/create-order',formData);
}