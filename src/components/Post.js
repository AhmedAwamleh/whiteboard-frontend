import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import AddPost from './Add-post-form'
import cookies from "react-cookies";


function Posts() {
    const [post, setPost] = useState()
    const [showPost, setShowPost] = useState(false)
    const [role, setRole] = useState('');



    const getPosts = async () => {
        const allPosts = await axios.get(
            `http://localhost:3009/post`, {
            headers: {
                Authorization: `Bearer ${cookies.load("token")}`,
            },
        }

        );
        setPost(allPosts.data);

        setShowPost(true)
        if (post) {
            console.log(post)
        }
    };

    const deletePost = async (id) => {
        const token = cookies.load('token')
        await axios.delete(`http://localhost:3009/post/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        getPosts()
    }




    useEffect(() => {
        setRole(cookies.load('role'));
        getPosts()

    }, [])

    const addPost = async (e) => {

        e.preventDefault()
        const postInfo = {

            title: e.target.title.value,
            content: e.target.content.value,
            userID: cookies.load("userID"),

        }
        console.log(postInfo)
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

            {showPost &&
                post.map((item, idx) => (
                    <div key={idx}>

                        <AddPost post={item} getPosts={getPosts} />


                        {
                            (role === 'admin' || item.userID == cookies.load('userID')) &&
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
