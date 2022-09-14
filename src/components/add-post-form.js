import React from "react";

export default function AddPost(props) {
    return (<div>
        {
            props.posts.map((post, idx) => {
                return (<div key={idx}>
                    <p>  {post.title}</p>
                    <p>  {post.content}</p>

                </div>)
            })
        }
    </div>
    )

}