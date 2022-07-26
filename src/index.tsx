import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
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
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          maxSnack={3}
          autoHideDuration={3500}
        >
          <App />
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
