import React, { FC } from 'react';
import Header from './containers/Header/Header';
import { Typography } from '@mui/material';

const App: FC = () => {
  return (
    <>
      <Header />
      <Typography>Ale</Typography>
    </>
  );
};

const AppContainer = () => {
  return <App />;
};

export default AppContainer;
