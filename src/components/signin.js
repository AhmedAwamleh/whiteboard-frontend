import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { HStack, Button, Input, VStack } from '@chakra-ui/react'

function Signin(props) {
  const { handleSignIn } = useContext(UserContext)
  return (





    <form action="" onSubmit={handleSignIn} >
      <HStack>
        <Input
          placeholder="Enter Your Email" id="username"
          border="2px"
          borderColor="blue.100"

        />
        <Input
          placeholder="Enter Your Password" id="password"
          border="2px"
          borderColor="blue.100"

        />
        <Button type="Submit" variant={['sm', 'md', 'lg']} px='10'>Sign In</Button>

      </HStack>
      {/* <input type="text" placeholder="enter your email" id="username" /><br />
      <input type="text" placeholder="enter your passowrd" id="password" /><br /> */}

      <br />
    </form>






  )
}
export default Signin;










