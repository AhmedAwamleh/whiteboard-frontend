import Signin from './components/signin';
import { When } from "react-if";
import Posts from './components/Post';
import './style.css';
import SignUp from './components/SignUp';
import { useContext } from "react";
import { UserContext } from "./context/AuthContext";

function App() {
  const { setLoggedin, loggedin, logout } = useContext(UserContext)
  return (
    <div className="App">

      <When condition={!loggedin}>
        <Signin setLoggedin={setLoggedin} /><br />
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
