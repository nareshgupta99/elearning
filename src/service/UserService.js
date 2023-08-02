import { privateAxios, publicAxios } from "./helper";

export function updateUserDetail(formData) {
  return privateAxios.post(`/user/update`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function changePassword(formData){

    return privateAxios.post(`/user/update-password`,formData);
}


export function requestPasswordResetService(formData){
  return publicAxios.post("/auth/request-reset-link",formData)

}

export function resetPasswordService(formData){
  return publicAxios.post("/auth/reset-password/password",formData)
}