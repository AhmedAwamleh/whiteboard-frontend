
import React from "react";
import AddComment from './Add-comment-form'
import { useState } from "react";
import cookies from 'react-cookies'
import axios from "axios";

export default function AddPost(props) {
    const [post, setPost] = useState(props.post)

    const getPost = async () => {

        const postData = await axios.get(`https://lab-9-10.herokuapp.com/post/${post.id}`, {
            headers: {
                Authorization: `Bearer ${cookies.load("token")}`,
            },
        }

        );
        setPost(postData.data);
        console.log(postData.data)
        props.getPosts()
    };

    // useEffect(() => {

    //     getPost()

    // }, [])



    return (
        <div>

            {post?.title} {""} {post?.content} by {post?.userTable.userName} {""} ID:{""}  {post?.userID}
            <br />

            < AddComment postId={post?.id} comments={post?.CommentsTables} getPost={getPost} />
        </div >

    )
}


