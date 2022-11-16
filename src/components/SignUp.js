import { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { HStack, Button, Input, VStack } from '@chakra-ui/react'
function SignUp() {
  const { handleSignUp } = useContext(UserContext)

  return (




    <form action="" onSubmit={handleSignUp} >
      <HStack>
        <Input
          placeholder="enter your name/username" id="userName"
          border="2px"
          borderColor="blue.100"
        />
        <Input
          placeholder="enter your email" id="email"
          border="2px"
          borderColor="blue.100"
        />
        <Input
          placeholder="enter your passowrd" id="password"
          border="2px"
          borderColor="blue.100"
        />

        <Button type="Submit" variant={['sm', 'md', 'lg']} px='10'>Sign In</Button>
      </HStack>
    </form>


  )
}
export default SignUp;