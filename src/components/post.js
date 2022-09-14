import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";
import AddPost from './add-post-form'
import AddCommentForm from './add-post-form'
function PostForm(props) {
    const [post, setPost] = useState([]);
    const [showPost, setShowPost] = useState(false)



    const getAllPost = async () => {
        const allPost = await axios.get('http://localhost:3005/post')
        console.log(allPost)
        setPost(allPost.data.post)
        console.log(setPost(allPost.data.posts))
        setShowPost(true)
    }


    const addPost = async (e) => {
        e.preventDefault()
        const postInfo = {
            title: e.target.title.value,
            content: e.target.content.value,
            comment: e.target.comment.value,

        }
        await axios.post(`http://localhost:3005/post`, postInfo)
        getAllPost()
    }
    // const handleDelete = async (id) => {
    //     await axios.delete(`http://localhost:3005/post${id}`);
    //     allPost();
    // };
    useEffect(() => {
        getAllPost()

    }, [])
    return (
        <div>
            <form onSubmit={addPost}>
                <label htmlFor="">title</label>
                <input type='text' name="title" />
                <label htmlFor="">content</label>
                <input type='text' name="content" />
                <label htmlFor="">comment</label>
                <input type='text' name="comment" />

                <input type='submit' value="add post" />
                {showPost &&

                    <AddPost posts={post} />

                }
                {

                    <AddCommentForm posts={post} />

                }
            </form>

        </div >
    )

}

export default PostForm