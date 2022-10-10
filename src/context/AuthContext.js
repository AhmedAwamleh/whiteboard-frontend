import axios from "axios";
import base64 from "base-64"
import cookies from 'react-cookies'
import { createContext, useState } from "react";

export const UserContext = createContext();


const UserProvider = (props) => {
  const [loggedin, setLoggedin] = useState(false);
  const [role, setRole] = useState('');
  const [user, setUser] = useState({})
  const [capabilities, setcapabilities] = useState()

  const logout = () => {
    cookies.remove('token')
    setLoggedin(false)


  }

  const fetchUserInfo = () => {
    axios.get(`https://lab-9-10.herokuapp.com/allUser`, {}, {
      headers: {
        Authorization: `Bearer ${cookies.load('token')}`
      }
    })
      .then(res => setUser(res.data))
  }


  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    };
    const encodedCredintial = base64.encode(`${data.username}:${data.password}`);
    console.log(`Basic ${encodedCredintial}`)

    axios.post('https://lab-9-10.herokuapp.com/login', {}, {
      headers: {
        Authorization: `Basic ${encodedCredintial}`
      }
    })
      .then(res => {
        setUser(res.data)
        cookies.remove();

        cookies.save('token', res.data.token);
        cookies.save('userID', res.data.id);
        cookies.save('userName,', res.data.userName);
        cookies.save('role', res.data.role);
        cookies.save('capabilities', JSON.stringify(res.data.capabilities));
        setLoggedin(true)
      })
      .catch(err => console.log(err));
  }
  const checkToken = () => {
    const token = cookies.load('token')
    const role = cookies.load('role')
    if (token) {
      setLoggedin(true)
      setRole(role)
      fetchUserInfo()
      setcapabilities(cookies.load('capabilities'))

    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      userName: e.target.userName.value,
      password: e.target.password.value

    }
    await axios.post(`https://lab-9-10.herokuapp.com/signUp`, data).then(res => {
      console.log(res)
    }).catch(error => console.log(error))

  }
  const canDo = (role) => {
    if (capabilities.includes(role)) {
      return true;
    } else {
      return false;
    }
  };

  const value = { handleSignIn, handleSignUp, checkToken, user, loggedin, logout, role, setRole, setLoggedin, capabilities, canDo }
  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  )

}
export default UserProvider;


