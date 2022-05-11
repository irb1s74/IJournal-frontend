import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Popular from '../containers/Popular/Popular';
import Subscriptions from '../containers/Subscriptions/Subscriptions';
import Profile from '../containers/Profile/Profile';
import UserPage from '../containers/UserPage/UserPage';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Router: FC<{ isAuth: boolean }> = ({ isAuth }) => {
  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path='popular' element={<Popular />} />
          <Route path='new' element={<div />} />
          <Route path='bookmarks' element={<div />} />
          <Route path='subs' element={<Subscriptions />} />
          <Route path='profile/*' element={<Profile />} />
          <Route path='user/:id' element={<UserPage />} />
          <Route path='*' element={<Navigate to='popular' />} />
        </>
      ) : (
        <>
          <Route path='popular' element={<Popular />} />
          <Route path='new' element={<div />} />
          <Route path='bookmarks' element={<div />} />
          <Route path='subs' element={<Subscriptions />} />
          <Route path='user/:id' element={<UserPage />} />
        </>
      )}
    </Routes>
  );
};

const ContainerRouter = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  return <Router isAuth={isAuth} />;
};
export default ContainerRouter;
