import { useState } from 'react';
import SignUp from '../src/components/signup';
import Signin from './components/signin';
import { When } from "react-if";
import Posts from './components/Post';
import cookies from 'react-cookies'
import { useEffect } from 'react';
import './style.css';

function App() {
  const [loggedin, setLoggedin] = useState(false);
  useEffect(() => {

    const token = cookies.load('token')
    if (token) {
      setLoggedin(true)
    }
  }, [])
  const logout = () => {
    cookies.remove('token')
    setLoggedin(false)

  }
  return (
    <div className="App">
      <When condition={!loggedin}>
        <SignUp /><br />
        <Signin setLoggedin={setLoggedin} /><br />
      </When >
      <When condition={loggedin}>
        <button onClick={logout} >Sign Out</button>
        <Posts />
      </When>



    </div >
  );
}

export default App;
