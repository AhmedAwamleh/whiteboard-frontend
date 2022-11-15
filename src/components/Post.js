import { useEffect } from "react"
import AddPost from './Add-post-form'
import { useContext } from "react";
import { PostContext } from "../context/postcontext";
import { UserContext } from "../context/AuthContext";
import { VStack, HStack, IconButton, Button, Input } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'
import { icons } from "react-icons";
function Posts() {

    const { post, showPost, getPosts, deletePost, addPost } = useContext(PostContext)
    const { role, canDo, } = useContext(UserContext)
    useEffect(() => {
        console.log(role)
        getPosts()

    }, [])

    return (


        <div>

            <form onSubmit={addPost}>
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
                    <Button type="submit" id="PosttSubmit" px='10' colorScheme='blue' >Post</Button>
                </VStack>
            </form>

            {showPost &&
                post.map((item, idx) => (
                    <div key={idx}>

                        <AddPost post={item} getPosts={getPosts} />


                        {canDo('delete', item.userID) === true &&

                            <>

                                <IconButton
                                    icon={<FaTrash />}
                                    isRound='true'
                                    onClick={() => deletePost(item.id)}

                                />
                            </>
                        }
                    </div>

                ))
            }

        </div>


    )
}

export default Posts
