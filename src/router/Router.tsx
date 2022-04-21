import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Popular from '../containers/Popular/Popular';
import Subscriptions from '../containers/Subscriptions/Subscriptions';
import Profile from '../containers/Profile/Profile';

const Router = () => {
  return (
    <Routes>
      <Route path='/popular' element={<Popular />} />
      <Route path='/new' element={<div />} />
      <Route path='/bookmarks' element={<div />} />
      <Route path='/subs' element={<Subscriptions />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<Navigate to='/popular' />} />
    </Routes>
  );
};

export default Router;
