import axios from "axios";
import React from "react";

function SignUp() {

  const handleSignUp = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      userName: e.target.userName.value,
      password: e.target.password.value

    }
    await axios.post(`http://localhost:3009/signUp`, data).then(res => {
      console.log(res)
    }).catch(error => console.log(error))

  }
  return (

    <div>
      <h2>Sign up</h2>
      <form action="" onSubmit={handleSignUp} >
        <input type="text" placeholder="enter your name/username" id="userName" /><br />
        <input type="email" placeholder="enter your email" id="email" /><br />
        <input type="text" placeholder="enter your passowrd" id="password" /><br />
        <button type="Submit" >Save</button>
      </form>
    </div>
  )
}
export default SignUp;