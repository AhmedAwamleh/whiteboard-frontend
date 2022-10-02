import axios from "axios";
import React from "react";
import base64 from "base-64"
import cookies from 'react-cookies'



function Signin(props) {


  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    };
    const encodedCredintial = base64.encode(`${data.username}:${data.password}`);
    console.log(`Basic ${encodedCredintial}`)
    axios.post('http://localhost:3009/login', {}, {
      headers: {
        Authorization: `Basic ${encodedCredintial}`
      }
    })
      .then(res => {
        cookies.remove();
        cookies.save('token', res.data.token);
        cookies.save('userID,', res.data.id);
        cookies.save('userName,', res.data.userName);
        cookies.save('role', res.data.role);

        // cookies.save('capabilities,', JSON.parse(res.data.capabilities));
        props.setLoggedin(true)
      })
      .catch(err => console.log(err));
  }


  return (
    <>

      <div>

        <h2>SignIn</h2>
        <form action="" onSubmit={handleSignIn} >

          <input type="text" placeholder="enter your email" id="username" /><br />
          <input type="text" placeholder="enter your passowrd" id="password" /><br />
          <button type="Submit" >SignIn</button>


        </form>
      </div>

    </>
  )
}
export default Signin;










