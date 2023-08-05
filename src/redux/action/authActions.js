import AuthService from "../../service/AuthService";
import { privateAxios } from "../../service/helper";
// export const loginSuccess = (token) => ({
//     type: 'LOGIN_SUCCESS',
//     payload: token,
//   });

export function loginSuccess(token) {
  return async (dispatch) => {
    try {
      dispatch({ type: 'LOGIN_SUCCESS', payload:token})

      // After successful login, fetch the user's roles from the server
      const roles = await fetchUserRoles();

      // Dispatch another action to update the user's roles in the state
      dispatch({ type: 'SET_ROLES', payload: roles });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
}

export const logoutSuccess = () => ({
  type: "LOGOUT_SUCCESS",
});



const fetchUserRoles = async () => {
  try {
    let {data}= await privateAxios.get("/user/roles");

   return data // Assuming the response contains a 'roles' property with user roles
  } catch (error) {
    throw error
  }

}

