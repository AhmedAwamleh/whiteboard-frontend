
import React from "react";
import AddComment from './Add-comment-form'
import { useState } from "react";
import cookies from 'react-cookies'
import axios from "axios";

export default function AddPost(props) {
    const [post, setPost] = useState(props.post)

    const getPost = async () => {

        const postData = await axios.get(`http://localhost:3009/post/${post.id}`, {
            headers: {
                Authorization: `Bearer ${cookies.load("token")}`,
            },
        }

        );
        setPost(postData.data);
        props.getPosts()
    };

    // useEffect(() => {

    //     getPost()

    // }, [])



    return (
        <div>

            {
                post?.title

            }
            < AddComment postId={post?.id} comments={post?.CommentsTables} getPost={getPost} />
        </div >

    )
}


