import { privateAxios } from "./helper";

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