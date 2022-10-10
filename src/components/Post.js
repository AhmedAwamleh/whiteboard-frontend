import { useEffect } from "react"
import AddPost from './Add-post-form'
import { useContext } from "react";
import { PostContext } from "../context/postcontext";
import { UserContext } from "../context/AuthContext";

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
                <input type="text" id="title" placeholder="write your title here" /><br />
                <input type="text" id="content" placeholder="write your content here" /><br />

                <input type="submit" id="PosttSubmit" />


            </form>

            {showPost &&
                post.map((item, idx) => (
                    <div key={idx}>

                        <AddPost post={item} getPosts={getPosts} />


                        {canDo('delete', item.userID) === true &&

                            <>
                                <button type="submit" onClick={() => deletePost(item.id)}>delete</button>

                                <button>edit</button>
                            </>
                        }
                    </div>

                ))
            }

        </div>


    )
}

export default Posts
