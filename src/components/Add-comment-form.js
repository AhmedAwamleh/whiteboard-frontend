
import { useState } from "react"
import axios from "axios"

import cookies from "react-cookies";
import { HStack, Button, Input, VStack, Text } from '@chakra-ui/react'
export default function AddComment(props) {
  const [comment, setComment] = useState(props.comments)



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
      userID: cookies.load("userID"),

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

          <Button type="submit" id="PosttSubmit" colorScheme='blue' >comment</Button>
        </HStack>
      </form>

      {
        comment &&
        comment.map((item, idx) => (
          <div key={idx}>
            <Text as='mark' fontSize='sm'>{item.content}
            </Text>




            {/* <button button type="submit" onClick={() => deleteComment(item.id)}>delete</button> */}
          </div>
        ))

      }


    </ div >
  )

}