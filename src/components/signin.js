import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/AuthContext";



function Signin(props) {
  const { handleSignIn } = useContext(UserContext)
  return (

    <>
      <div>

        <h2>SignIn</h2>
        <form action="" onSubmit={handleSignIn} >
          <input type="text" placeholder="enter your email" id="username" /><br />
          <input type="text" placeholder="enter your passowrd" id="password" /><br />
          <button type="Submit" >SignIn</button>
          <br />
        </form>
      </div>




    </>
  )
}
export default Signin;










