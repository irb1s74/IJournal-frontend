import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Newsline from '../containers/Newsline/Newsline';

const Router = () => {
  return (
    <Routes>
      <Route path='/popular' element={<Newsline />} />
      <Route path='/new' element={<div />} />
      <Route path='/bookmarks' element={<div />} />
      <Route path='/subs' element={<div />} />
      <Route path='*' element={<Navigate to='/popular' />} />
    </Routes>
  );
};

export default Router;
