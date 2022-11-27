import { useEffect } from "react"
import AddPost from './Add-post-form'
import { useContext } from "react";
import { PostContext } from "../context/postcontext";
import { UserContext } from "../context/AuthContext";
import { IconButton, Input } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'
import { getData } from "../actions/postAction";
import { VStack, StackDivider, } from '@chakra-ui/react'
import AddComment from "./Add-comment-form";
function Posts() {

    const { post, getPosts, deletePost } = useContext(PostContext)

    const { user } = useContext(UserContext)

    useEffect(() => {
        if (post) {

            getPosts()
        }
    }, [])

    return (
        <div>
            <VStack borderColor="blue.100"
                divider={<StackDivider />}
                borderWidth='4px'
                p="4"
                borderRadius='lg'
                alignItems='stretch'
                w={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}>



                <div>

                    {
                        post.map((post, idx) => (
                            <div key={idx}>
                                {post.id}
                                {post.title}
                                {user.user.capabilities.includes('delete') &&
                                    <>
                                        <IconButton
                                            icon={<FaTrash />}
                                            isRound='true'
                                            onClick={() => deletePost(post.id)}

                                        />
                                    </>
                                }
                                < AddComment postId={post.id} comments={post.CommentsTables} getPost={getPosts} user={user} />
                            </div>

                        ))
                    }

                </div >
            </VStack>
        </div>

    )
}

export default Posts
