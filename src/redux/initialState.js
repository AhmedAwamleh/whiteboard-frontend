'use strict'
const userInfo = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : {};
const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';

export const initialState = {
  user: {},
  token: "",
  loggedin: true,
  errorMassge: false,
}
