import React from "react";
import AddComment from './Add-comment-form'
export default function AddPost(props) {

    return (<div>

        {
            props.posts.map((item, idx) => {
                return (<div key={idx}>
                    <p>  {item.title}</p>
                    <p>  {item.content}</p>
                    <AddComment CommentsTables={item.CommentsTables} />

                </div>)
            })
        }
    </div>
    )

}