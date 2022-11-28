import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";;



export const authSlice = createSlice({
  name: "Auth",
  initialState,

  reducers: {
    logIn: (state, action) => {
      state.user = action.payload.user
      state.loggedin = true
      state.token = action.payload.token
      state.errorMassge = false

    },
    logout: (state, action) => {

      state.user = {};
      state.loggedin = false
      state.token = ""
      state.errorMassge = false
    },
    logfail: (state, action) => {
      state.user = {}
      state.loggedin = false
      state.token = ""
      state.errorMassge = true
    },
    signup: (state, action) => {
      state.user = action.payload.user
      state.loggedin = true
      state.token = action.payload.token
      state.errorMassge = false
    }
  }
})

export const authActions = authSlice.actions
export const { logIn, logout, logfail, signup } = authSlice.actions
export default authSlice;