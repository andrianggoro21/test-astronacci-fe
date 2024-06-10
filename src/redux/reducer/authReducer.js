import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {
    id: null,
    username: "",
    email: "",
    membershipTypeId: null,
  },
  isLogin: false,
};

export const AuthReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, username, email, membershipTypeId } = action.payload;
      state.user = {
        id,
        username,
        email,
        membershipTypeId,
      };
    },
    loginSuccess: (state) => {
      state.isLogin = true;
    },
    logoutSuccess: (state) => {
      state.isLogin = false;
      localStorage.removeItem('token')
    },
    keepLoginSuccess: (state) => {
      state.isLogin = true;
    },
  },
});

export const { setUser, loginSuccess, logoutSuccess, keepLoginSuccess } =
  AuthReducer.actions;
export default AuthReducer.reducer;

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        {
          email,
          password,
        }
      );
      console.log("Login response", res.data.data.user);
      // Assuming you would set the user and login status based on response data
      localStorage.setItem("token", res?.data?.data?.token);
      dispatch(setUser(res?.data?.data?.user));
      dispatch(loginSuccess());
    } catch (error) {
      console.error("Login error", error);
    }
  };
};

export const keepLogin = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/keep-login`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Assuming you would set the user and login status based on response data
      dispatch(setUser(res?.data?.data));
      dispatch(keepLoginSuccess());
    } catch (error) {
      // console.error("Login error", error);
    }
  };
};
