'use strict'

import axios from "axios";
// `https://lab-9-10.herokuapp.com/post`
export const getData = async (dispatch) => {
  try {
    const postData = await axios.get(`https://lab-9-10.herokuapp.com/post`)
    dispatch({ type: "GET_POST", payload: postData.data })

  } catch (error) {
    console.log(error)
  }
}

export const deletePosts = (dispatch, data) => {

  axios.delete(`https://lab-9-10.herokuapp.com/post/${data.id}`, {
    headers: {
      Authorization: `Bearer ${data.token}`
    }
  }).then(res => {
    dispatch({ type: "DELETE_POST", payload: data.id })
  }).catch(e => {
    console.log(e)
  })

}