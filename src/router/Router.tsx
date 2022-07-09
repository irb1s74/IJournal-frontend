import React, { FC, memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Popular from '../containers/Popular/Popular';
import Profile from '../containers/Profile/Profile';
import User from '../containers/User/User';
import { useTypedSelector } from '../hooks/useTypedSelector';
import PrivateRoutes from '../helpers/privateRoutes';

const Router: FC<{ isAuth: boolean }> = memo(({ isAuth }) => {
  return (
    <Routes>
      <Route element={<PrivateRoutes auth={isAuth} />}>
        <Route path='new' element={<div />} />
        <Route path='bookmarks' element={<div />} />
        <Route path='my' element={<div />} />
        <Route path='profile/*' element={<Profile />} />
      </Route>
      <Route path='popular' element={<Popular />} />
      <Route path='new' element={<div />} />
      <Route path='bookmarks' element={<div />} />
      <Route path='user/:id/*' element={<User />} />
      <Route path='*' element={<Navigate to='popular' />} />
    </Routes>
  );
});

const ContainerRouter = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  return <Router isAuth={isAuth} />;
};
export default ContainerRouter;
