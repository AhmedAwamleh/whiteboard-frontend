import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import SignUp from './components/SignUp';
import reportWebVitals from './reportWebVitals';
import UserProvider from './context/AuthContext'
import PostContextProvider from './context/postcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <PostContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='signup' element={<SignUp />} />
          </Route >
        </Routes>
      </BrowserRouter >
    </PostContextProvider>
  </UserProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
