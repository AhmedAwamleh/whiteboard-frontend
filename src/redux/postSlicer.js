
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  post: []
}


export const postSlice = createSlice({
  name: "POST",
  initialState,

  reducers: {
    GETPOST: (state, action) => {
      state.post = action.payload;
    },

    ADDPOST: (state, action) => {
      state.post = [...state.post, action.payload];
    },

    DELETEPOST: (state, action) => {
      state.post = state.post.filter(post => post.id !== action.payload);
    }
  }
})

export const postActions = postSlice.actions
export const { GETPOST, ADDPOST, DELETEPOST, } = postSlice.actions
export default postSlice;





