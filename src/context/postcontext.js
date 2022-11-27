'use strict'
import { useReducer, useContext, createContext } from "react"
import axios from "axios"
import { postReducer, dataPost } from "../Reducer/postReducer";
import { deletePosts, getData } from "../actions/postAction";
import { UserContext } from "./AuthContext";

export const PostContext = createContext();
const PostContextProvider = (props) => {

  const [post, dispatch] = useReducer(postReducer, dataPost,)
  const { user } = useContext(UserContext)




  const getPosts = async () => {
    try {
      getData(dispatch)
    } catch (error) {
      console.log(error)
    }
  }


  const deletePost = async (id) => {
    const token = localStorage.getItem('token')
    deletePosts(dispatch, { id, token })
  }


  const addPost = async (e) => {
    console.log(user)
    e.preventDefault()
    const postInfo = {

      title: e.target.title.value,
      content: e.target.content.value,
      userID: user.user.id,

    }
    console.log(postInfo)
    await axios.post(`https://lab-9-10.herokuapp.com/post`, postInfo)
    getPosts();
  }



  const value = { post, getPosts, deletePost, addPost }
  return (
    <PostContext.Provider value={value}>
      {props.children}
    </PostContext.Provider>
  )
}
export default PostContextProvider