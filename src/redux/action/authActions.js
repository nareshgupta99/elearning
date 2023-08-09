import AuthService from "../../service/AuthService";

import { privateAxios } from "../../service/helper";

export function loginSuccess(token) {
  return async (dispatch) => {
    try {
      dispatch({ type: 'LOGIN_SUCCESS', payload:token})

      // After successful login, fetch the user's roles from the server
      const roles = await fetchUserRoles();
      const user= await fetchUser();
      console.log(user.roles)
      
      // Dispatch another action to update the user's roles in the state
      dispatch({ type: 'SET_ROLES', payload: user });
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

const fetchUser=async ()=>{
  try{
    let {data}= await privateAxios.get("/user");
    return data;
  }
  catch (err){
    throw err;
  }
}

