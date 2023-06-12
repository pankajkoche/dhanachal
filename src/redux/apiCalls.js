import { publicRequest } from "../requestMethod";
import { loginStart, loginSuccess,loginFailure,logOut } from "./userRedux"
import logoutCart from "./cartRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
      const res = await publicRequest.post("/auth/login", user);
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };

export const LogOut =(dispatch)=>{
  dispatch(logOut());
  dispatch(logoutCart())
}

export const RegisterUser = async (dispatch, user) => {
  
  try {
    const res = await publicRequest.post("/auth/register", user);
    alert("Register succesfully");
    
  } catch (err) {
    alert("something wrong try agian");
  }
};
