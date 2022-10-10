import { useContext } from "react";
import { UserContext } from "../context/AuthContext";

function SignUp() {
  const { handleSignUp } = useContext(UserContext)

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