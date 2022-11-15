import Signin from './components/signin';
import { When } from "react-if";
import Posts from './components/Post';
import SignUp from './components/SignUp';
import { useContext, useEffect } from "react";
import { UserContext } from "./context/AuthContext";
import { FaSun, FaMoon } from 'react-icons/fa'
import { IconButton, useColorMode, VStack, Heading, Button } from '@chakra-ui/react'
function App() {
  const { loggedin, logout, checkToken } = useContext(UserContext)

  useEffect(() => {
    checkToken()

  }, [])
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <VStack p='2em'>


      <IconButton

        colorScheme='teal'
        aria-label='Send email'
        icon={colorMode === 'light' ? < FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
        alignSelf='flex-end'
      />
      <Heading as='h1' size='4xl' noOfLines={1}
        bgGradient='linear(to-r,cyan.500,cyan.400,green.500)' bgClip='text'>
        White-Boared
      </Heading>


      <When condition={!loggedin}>
        <Signin /><br />
        <SignUp />
        {/* <ul>
          <li>
            <Link to='./SignUp'>signup</Link>
          </li>
        </ul> */}
      </When >
      <When condition={loggedin}>

        <Posts />
        <Button colorScheme='blue' px='10' onClick={logout} >Sign Out</Button>


      </When>

    </VStack >
  );
}

export default App;
