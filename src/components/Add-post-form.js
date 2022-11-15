
import React from "react";
import AddComment from './Add-comment-form'
import { useState } from "react";
import cookies from 'react-cookies'
import axios from "axios";
import { VStack, StackDivider, IconButton, Text } from '@chakra-ui/react'

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


        <VStack borderColor="blue.100"
            divider={<StackDivider />}
            borderWidth='4px'
            p="4"
            borderRadius='lg'
            alignItems='stretch'
            w={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
        >

            <Text fontSize='4xl' as='cite'> {post?.title} {""} {post?.content} by {post?.userTable.userName} {""} ID:{""}  {post?.userID}</Text><br />
            < AddComment postId={post?.id} comments={post?.CommentsTables} getPost={getPost} />
        </VStack >

    )
}


