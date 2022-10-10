import axios from "axios";
import base64 from "base-64"
import cookies from 'react-cookies'
import { useEffect } from 'react';
import { createContext, useState } from "react";

export const UserContext = createContext();


const UserProvider = (props) => {
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
        cookies.remove();
        cookies.save('token', res.data.token);
        cookies.save('userID', res.data.id);
        cookies.save('userName,', res.data.userName);
        cookies.save('role', res.data.role);



        setLoggedin(true)
        // cookies.save('capabilities,', JSON.parse(res.data.capabilities));



      })
      .catch(err => console.log(err));
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

  const value = { handleSignIn, handleSignUp, setLoggedin, loggedin, logout }
  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  )

}
export default UserProvider;


