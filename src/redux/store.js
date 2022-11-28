'use strict'
import { configureStore } from "@reduxjs/toolkit"
import postSlice from "./postSlicer"
import authSlice from './slicer'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    post: postSlice.reducer
  }
})