import React, { FC } from 'react';
import { Stack } from '@mui/material';
import Router from './router/Router';
import Header from './containers/Header/Header';
import Sidebar from './containers/Sidebar/Sidebar';

const App: FC = () => {
  return (
    <>
      <Header />
      <Stack
        sx={{ width: '100%' }}
        direction='row'
        justifyContent='space-between'
        alignItems='flex-start'
      >
        <Sidebar />
        <Router />
      </Stack>
    </>
  );
};

const AppContainer = () => {
  return <App />;
};

export default AppContainer;
