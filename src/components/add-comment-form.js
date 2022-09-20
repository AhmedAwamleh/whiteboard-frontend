import axios from "axios";
import React from "react";



export default function AddCommentForm(props) {
    return (<div>
        {
            props.posts.map((post, idx) => {
                return (<div key={idx}>
                    <p>  {post.comment}</p>
                    <input type='submit' value="add post" />

                </div>)
            })
        }
    </div>
    )

}