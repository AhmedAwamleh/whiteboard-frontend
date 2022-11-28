const userInfo = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : {};
const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';

export const initialState = {
  user: userInfo,
  token: token,
  loggedin: token ? true : false,

  errorMassge: false,

}
console.log(initialState)
export const AuthReducer = (state, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {

    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        loggedin: true,
        token: action.payload,
        errorMassge: false
      }
    case "LOGIN_FAIL":
      return {
        ...state,
        loggedin: false,
        errorMassge: action.payload,
      }
    case "LOG_OUT":
      return {
        ...state,
        loggedin: false,
        user: '',
        token: "",
        errorMassge: false

      }
    case "SING_UP":
      return {
        ...state,
        loggedin: false
      }

    default:
      throw new Error('Unknown action')
  }
}





