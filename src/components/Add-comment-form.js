
import { useState, useContext } from "react"
import axios from "axios"
import { UserContext } from "../context/AuthContext"
import { HStack, Button, Input, VStack, Text } from '@chakra-ui/react'


export default function AddComment(props) {
  const [comment, setComment] = useState(props.comments)
  const { user } = useContext(UserContext)

  // const getComment = async () => {
  //   const allComment = await axios.get(`http://localhost:3009/comment`);
  //   setComment(allComment.data.comment);
  //   setShowcomment(true)
  //   if (setShowcomment) {
  //     console.log(allComment.data.comment)
  //   }
  // };


  // const deleteComment = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:3009/comment/${id}`);
  //     // getComment();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {

  //   // getComment()

  // }, [])

  const addComment = async (e) => {

    e.preventDefault()
    const commentInfo = {

      postID: props.postId,
      content: e.target.content.value,
      userID: props.user.user.id

    }
    console.log(commentInfo)
    await axios.post(`https://lab-9-10.herokuapp.com/comment`, commentInfo)
    props.getPost()
  }

  return (

    <div >
      <form onSubmit={addComment}>
        <HStack >
          <Input
            border="2px"
            borderColor="blue.100"
            id="content" placeholder="write your title comment"
          />
          <Button type="Submit" id="PosttSubmit" variant={['sm', 'md', 'lg']} px='10'>comment</Button>

        </HStack>
      </form>
      {
        comment &&
        comment.map((item, idx) => (
          <div key={idx}>


            <Text variant={['md', 'sm']} border="2px" borderColor="blue.100">{item.content}
            </Text>
            {/* <button button type="submit" onClick={() => deleteComment(item.id)}>delete</button> */}
          </div>
        ))

      }


    </ div >
  )

}