import axios from "axios";
import base64 from "base-64";


function Signin() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      'username': e.target.username.value,
      'password': e.target.password.value,
    };
    const encoded = base64.encode(`${user.username}:${user.password}`);
    await axios.post(
      `http://localhost:3005/signin`,
      {},
      {
        headers: {
          'Authorization': `Basic ${encoded}`
        }
      }
    ).then((res) => {
      if (res.status === 200) {
        localStorage.setItem('token', true);
        window.location.href = '/posts';
      }
    }).catch((err) => {
      alert('Invalid Login');
    }
    );
  };
  return (
    <div className="signin">
      <h1>Sign in</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="form-control">
          <input type="submit" />
        </div>
      </form>

    </div>
  );
}

export default Signin;