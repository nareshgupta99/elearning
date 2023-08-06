import { privateAxios } from "./helper";

export function initiatePayment(formData){
   return  privateAxios.post('/payment/create-order',formData);
}

export function paymentVerification(formdata){
   return privateAxios.post("/payment/verification",formdata);
}

