import { createContext } from "react";
import { useState } from "react"
import axios from "axios"
import cookies from "react-cookies";


export const PostContext = createContext();
const PostContextProvider = (props) => {

  const [post, setPost] = useState()
  const [showPost, setShowPost] = useState(false)



  const getPosts = async () => {
    const allPosts = await axios.get(
      `https://lab-9-10.herokuapp.com/post`, {
      headers: {
        Authorization: `Bearer ${cookies.load("token")}`,
      },
    }

    );
    setPost(allPosts.data);
    setShowPost(true)
    if (post) {
      console.log(post)
    }
  };

  const deletePost = async (id) => {
    const token = cookies.load('token')
    await axios.delete(`https://lab-9-10.herokuapp.com/post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    getPosts()
  }


  const addPost = async (e) => {

    e.preventDefault()
    const postInfo = {

      title: e.target.title.value,
      content: e.target.content.value,
      userID: cookies.load("userID"),

    }
    console.log(postInfo)
    await axios.post(`https://lab-9-10.herokuapp.com/post`, postInfo)
    getPosts();
  }



  const value = { post, showPost, getPosts, deletePost, addPost }
  return (
    <PostContext.Provider value={value}>
      {props.children}
    </PostContext.Provider>
  )
}
export default PostContextProvider