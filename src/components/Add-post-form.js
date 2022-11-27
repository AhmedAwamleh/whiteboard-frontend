
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { VStack, StackDivider, Input, Button, Text } from '@chakra-ui/react'
import { PostContext } from "../context/postcontext";
import AddComment from './Add-comment-form'
export default function AddPost(props) {
    console.log(props.post)
    const { addPost } = useContext(PostContext)


    useEffect(() => {
        if (props.post) {

            props.Posts()
        }
    }, [])



    return (


        <VStack borderColor="blue.100"
            divider={<StackDivider />}
            borderWidth='4px'
            p="4"
            borderRadius='lg'
            alignItems='stretch'
            w={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
        >
            < form onSubmit={addPost} >
                <VStack p='2em' alignItems='stretch'>
                    <Input
                        border="2px"
                        borderColor="blue.100"
                        id="title" placeholder="write your title here"
                    />
                    <Input
                        border="2px"
                        borderColor="blue.100"
                        id="content" placeholder="write your content here"
                    />

                    <Button type="Submit" colorScheme="black" variant={['sm', 'md', 'lg']} px='10' id="PosttSubmit"> Post</Button>

                </VStack>
            </ form >



        </VStack >

    )
}


