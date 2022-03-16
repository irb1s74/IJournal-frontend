import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import App from './App';
import theme from './theme';
import './theme/styles/index.scss';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
