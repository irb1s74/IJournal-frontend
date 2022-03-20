import React, { FC, useCallback } from 'react';
import Header from './components/Header/Header';
import { Stack } from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar';
import Router from './router/Router';
import { useDispatch } from 'react-redux';
import { AppSetMenu } from './store/reducers/appReducer/actions';
import { useTypedSelector } from './hooks/useTypedSelector';

const App: FC = () => {
  const dispatch = useDispatch();
  const ActionToggleMenu = useCallback(() => dispatch(AppSetMenu()), []);
  const isMenuOpen = useTypedSelector((state) => state.appReducer.isMenuOpen);
  return (
    <>
      <Header toggleMenu={ActionToggleMenu} />
      <Stack
        sx={{ width: '100%' }}
        direction='row'
        justifyContent='space-between'
        alignItems='flex-start'
      >
        <Sidebar isMenuOpen={isMenuOpen} />
        <Router />
      </Stack>
    </>
  );
};

const AppContainer = () => {
  return <App />;
};

export default AppContainer;
