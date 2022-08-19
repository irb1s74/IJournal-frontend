import React, { FC, memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout/Layout';
import Profile from '../containers/Profile/Profile';
import User from '../containers/User/User';
import { useTypedSelector } from '../hooks/useTypedSelector';
import PrivateRoutes from '../helpers/privateRoutes';
import Post from '../containers/Post/Post';
import { ELayouts } from '../models/ELayouts';

const Router: FC<{ isAuth: boolean }> = memo(({ isAuth }) => {
  return (
    <Routes>
      <Route element={<PrivateRoutes auth={isAuth} />}>
        <Route
          path='bookmarks'
          element={<Layout type={ELayouts.bookmarks} />}
        />
        <Route path='subs' element={<Layout type={ELayouts.subs} />} />
        <Route path='profile/*' element={<Profile />} />
      </Route>
      <Route path='popular' element={<Layout type={ELayouts.popular} />} />
      <Route path='new' element={<Layout type={ELayouts.new} />} />
      <Route path='user/:id/*' element={<User />} />
      <Route path='post/:id' element={<Post />} />
      <Route path='*' element={<Navigate to='popular' />} />
    </Routes>
  );
});

const ContainerRouter = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  return <Router isAuth={isAuth} />;
};
export default ContainerRouter;
