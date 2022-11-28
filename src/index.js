import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserProvider from './context/AuthContext'
import PostContextProvider from './context/postcontext';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react'
import { newTheme } from './theme/index'
import { Provider } from 'react-redux';
import { store } from './redux/store';
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={newTheme}>
    <Provider store={store}>
      <UserProvider>
        <PostContextProvider>

          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />

        </PostContextProvider>
      </UserProvider>
    </Provider>
  </ChakraProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
