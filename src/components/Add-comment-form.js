import React from "react";

export default function AddComment(props) {
  return (<div>
    {
      // AllPosts.data[0].CommentsTables
      props.CommentsTables.map((post, idx) => {
        return (<div key={idx}>
          <p>comment: {post.content} </p>


        </div>)
      })
    }
  </div>
  )

}