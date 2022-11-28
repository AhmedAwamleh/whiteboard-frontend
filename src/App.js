
import Signin from './components/signin';
import { When } from "react-if";
import Posts from './components/Post';
import SignUp from './components/SignUp';
import { useContext } from "react";
import { UserContext } from "./context/AuthContext";
import { FaSun, FaMoon } from 'react-icons/fa'
import { IconButton, useColorMode, VStack, Heading, Button } from '@chakra-ui/react'
import AddPost from './components/Add-post-form';
import { useDispatch, useSelector } from 'react-redux';
import { authSlice } from './redux/slicer';

function App() {
  const { logout, user } = useContext(UserContext)


  const islogin = useSelector(state => state.auth.loggedin)



  console.log(islogin)

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
      <Heading as='h1'
        size='4xl'
        noOfLines={1}
        bgGradient='linear(to-r, primary.400, primary.100, warning.100)'
        bgClip='text'
        textStyle='h1'
      >
        White-Boared
      </Heading>


      <When condition={!user.loggedin}>
        <Signin /><br />
        <SignUp />
      </When >
      <When condition={user.loggedin}>
        <AddPost />
        <Posts />
        <Button type="Submit" variant={['sm', 'md', 'lg']} px='10' onClick={logout}>Sign Out</Button>

      </When>
    </VStack >
  );
}

export default App;
