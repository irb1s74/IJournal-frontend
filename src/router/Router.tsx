import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Newsline from '../containers/Newsline/Newsline';
import Subscriptions from '../containers/Subscriptions/Subscriptions';

const Router = () => {
  return (
    <Routes>
      <Route path='/popular' element={<Newsline />} />
      <Route path='/new' element={<div />} />
      <Route path='/bookmarks' element={<div />} />
      <Route path='/subs' element={<Subscriptions />} />
      <Route path='*' element={<Navigate to='/popular' />} />
    </Routes>
  );
};

export default Router;
