
import { useState } from "react"
import axios from "axios"

import cookies from "react-cookies";


export default function AddComment(props) {
  const [comment, setComment] = useState(props.comments)

  setComment(true)





  const addComment = async (e) => {

    e.preventDefault()
    const commentInfo = {

      postID: props.postId,
      content: e.target.content.value,
      userID: cookies.load("userID"),

    }
    console.log(commentInfo)
    await axios.post(`http://localhost:3009/comment`, commentInfo)
    props.getPost()
  }

  return (
    <div>
      <form onSubmit={addComment}>
        <input type="text" id="content" placeholder="write your title comment" /><br />
        <button type="submit" id="PosttSubmit" >comment</button>
      </form>

      {comment &&
        comment.map((item, idx) => (
          <li key={idx}>
            <p>
              {item.content}

            </p>

            {/* <button button type="submit" onClick={() => deleteComment(item.id)}>delete</button> */}
          </li>
        ))

      }


    </div >
  )

}