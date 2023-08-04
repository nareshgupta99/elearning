import axios from "axios";
import { privateAxios } from "./helper";

const APP_BASE_URL = "http://localhost:8181/api/auth";

class AuthService {
  registerInstructor(data) {
    return axios.post(APP_BASE_URL + "/instructor", data);
  }

  registerStudent(data) {
    return axios.post(APP_BASE_URL + "/student", data);
  }

  login(data) {
    return axios.post(APP_BASE_URL + "/login", data);
  }

  isTokenValid(token) {
    if (!token) return false;

    const decodedToken = JSON.parse(atob(token.split(".")[1])); // decode jwt token
    const expirationDate = new Date(decodedToken.exp * 1000); // // Convert the 'exp' claim to milliseconds

    return expirationDate > new Date();
  }

  fetchUserRoles() {
    return privateAxios.get("/user/roles");
  }

  isStudentPresent(roles) {
    let ans = roles.findIndex((role) => role.roleName === "ROLE_STUDENT");

    return ans !== -1;
  }

  isInstructorPresent(roles) {
    let ans = roles.findIndex((role) => role.roleName === "ROLE_INSTRUCTOR");
    return ans !== -1;
  }
}

export default AuthService = new AuthService();
