
import './App.css';
import PostForm from './components/post'
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from './components/Signin';

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/Signin" element={<Signin />} />
          <Route exact path="/post" element={<PostForm />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
