
import React from "react";
import AddComment from './Add-comment-form'
import { useState } from "react";
import cookies from 'react-cookies'
import { useEffect } from "react";
import axios from "axios";

export default function AddPost(props) {
    const [role, setRole] = useState('');

    const [post, setPost] = useState([]);

    const fetchData = async () => {
        try {
            const postData = await axios.get('http://localhost:3009/post');
            setPost(postData.data);
            console.log(postData.data)
        } catch (e) {

        }
    }
    useEffect(() => {
        fetchData()
        setRole(cookies.load('role'));
    }, [])

    const deletePost = async (id) => {
        const token = cookies.load('token')
        await axios.delete(`http://localhost:3009/post/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            fetchData()
            alert('deleted')
        }).catch(e => {
            console.log(e)
        })
    }
    return (
        <div>
            <ul>
                {post &&
                    post.map((item, idx) => (

                        <li key={idx}>
                            <p > {item.title} by {item.userTable.userName} </p>
                            <AddComment CommentsTables={item.CommentsTables} />
                            {
                                role === 'admin' &&
                                <>
                                    <button onClick={() => deletePost(item.id)}>delete</button>
                                    <button>edit</button>
                                </>
                            }
                        </li>

                    ))
                }
            </ul >

        </div >

    )
}


