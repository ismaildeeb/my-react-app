import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App'
import { Provider } from 'react-redux';
import {index} from './store/index';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={index}>
      <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)