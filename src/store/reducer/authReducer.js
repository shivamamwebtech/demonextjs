import { createAction, createReducer, isRejected } from "@reduxjs/toolkit";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_LOCAL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_TO_LOGIN,
} from "../action/actionType";

const initialState = {
  loading: false,
  user: { name: "", email: "", password: "" },
  isAuthenticated: false,
  isRegister: false,
  massage: "",
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SIGNUP_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(SIGNUP_SUCCESS, (state, action) => {
      state.loading = false;
      state.user = action.payload; 
      state.massage = "registration successful";
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.isRegister = true;
    })
    .addCase(SIGNUP_LOCAL, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.massage = "registration successful";
      const data = localStorage.getItem("login");
      if (data) {
        state.isAuthenticated = true;
      }
    })
    .addCase(SIGNUP_FAIL, (state, action) => {
      state.loading = false;
      state.massage = action.payload;
    })
    .addCase(SIGNUP_TO_LOGIN, (state, action) => {
      state.isRegister = false;
    })

    // isAuthenticated

    .addCase(LOGIN_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(LOGIN_SUCCESS, (state, action) => {
      state.loading = false;
      const user = localStorage.getItem("user");
      if (user) {
        const userData = JSON.parse(user);
        if (
          userData.email === action.email &&
          userData.password === action.password
        ) {
          state.isAuthenticated = true;
          state.massage = "registration successful";
          localStorage.setItem("login", true);
        } else {
          state.massage = "please enter vaild details";
        }
      } else {
        state.massage = "please register first";
      }
    })
    .addCase(LOGIN_FAIL, (state, action) => {
      state.massage = action.payload;
      state.loading = false;
    })

    // logout

    // .addCase(LOGOUT_REQUEST, (state, action) => {
    //   state.loading = false;
    //   state.massage = action.payload;
    // })

    .addCase(LOGOUT_SUCCESS, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      localStorage.removeItem("login");
      state.massage = "logout";
    })
    .addCase(LOGOUT_FAIL, (state, action) => {
      state.loading = false;
      state.massage = "";
    });
});
