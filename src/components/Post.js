import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import AddPost from './Add-post-form'

// import AddComment from "./Add-comment-form"

function Posts() {
    const [post, setPost] = useState()
    const [showPost, setShowPost] = useState(false)


    const getPosts = async () => {
        const AllPosts = await axios.get(`http://localhost:3009/CommentPost`)
        setPost(AllPosts.data)

        setShowPost(true)
    }

    useEffect(() => {
        getPosts()

    }, [])

    const addPost = async (e) => {
        e.preventDefault()
        const postInfo = {
            title: e.target.title.value,
            content: e.target.content.value,

        }
        await axios.post(`http://localhost:3009/post`, postInfo)
        getPosts();
    }
    return (



        <div>
            <form onSubmit={addPost}>
                <input type="text" id="title" placeholder="write your title here" /><br />
                <input type="text" id="content" placeholder="write your content here" /><br />

                <input type="submit" id="PosttSubmit" />
            </form>
            {
                showPost &&
                <AddPost posts={post} />
            }
            {/* {
        showPost &&
        <AddComment posts={post} />
      } */}

        </div>


    )
}

export default Posts
