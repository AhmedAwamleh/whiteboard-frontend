'use strict'
import { logIn, logout, logfail, signup } from "../redux/slicer";
import axios from "axios";

export const login = (dispatch, payload) => {
  try {

    axios.post('http://localhost:3009/login', {}, {
      headers: {
        Authorization: `Basic ${payload}`
      }
    })
      .then(res => {
        dispatch({ type: "LOGIN", payload: res.data })
        localStorage.setItem('currentUser', JSON.stringify(res.data))
        localStorage.setItem('token', res.data.token)

      })
      .catch(err => console.log(err));
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error })
  }
}



export const logOutHandler = (dispatch) => {
  dispatch({ type: "LOG_OUT" })
  localStorage.removeItem('currentUser')
  localStorage.removeItem('token')
}

export const SINGUP = (dispatch, payload) => {
  try {
    axios.post(`https://lab-9-10.herokuapp.com/signUp`, payload).then(res => {
      dispatch({ type: "SIGN_UP", payload: res.data })
    })
  } catch (error) {
    console.log(error)

  }
}