'use strict'
export const dataPost = []

export const postReducer = (state, action) => {
  switch (action.type) {
    case ("GET_POST"): {
      return [
        ...state,
        ...action.payload
      ]
    }
    case ('ADD_POST'): {
      return [
        ...state,
        action.payload
      ]
    }
    case ('DELETE_POST'):
      return state.filter(item => item.id !== action.payload)
    default: return state;

  }
}