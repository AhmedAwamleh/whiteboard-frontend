import Signin from './components/signin';
import { When } from "react-if";
import Posts from './components/Post';
import './style.css';
import SignUp from './components/SignUp';
import { useContext } from "react";
import { UserContext } from "./context/AuthContext";
import { useEffect } from 'react';


function App() {
  const { loggedin, logout, checkToken } = useContext(UserContext)

  useEffect(() => {
    checkToken()

  }, [])

  return (
    <div className="App">

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
        <button onClick={logout} >Sign Out</button>
        <Posts />
      </When>



    </div >
  );
}

export default App;
