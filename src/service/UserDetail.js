import { privateAxios } from "./helper";

export const getToken = () => {
  let token = localStorage.getItem("token");
  return token;
};

export const getLoginUser = async () => {
  if (getToken()) {
    try {
      const { data } = await privateAxios.get("/user");
      return data;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
};

export const doLogout = () => {
  localStorage.removeItem("token");
};
