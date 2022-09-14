import React from "react";
import { useState } from 'react'
import axios from "axios";

function PostForm() {
    const [post, setPost] = useState([]);
    const [showPost, setShowPost] = useState(false)


    const getAllPost = async () => {
        const allPost = await axios.get('http://localhost:3005/post')
        setPost(allPost.data)
        setShowPost(true)
    }
    return (
        <div>
            <form>
                <label htmlFor="">ownerID</label>
                <input type='text' name="username" />
                <label htmlFor="">content</label>
                <input type='text' name="discription" />

                <input type='submit' name="add" />
            </form>

        </div>
    )

}

export default PostForm