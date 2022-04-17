import React, { FC, useCallback, useEffect } from 'react';
import Router from './router/Router';
import Header from './containers/Header/Header';
import Sidebar from './containers/Sidebar/Sidebar';
import { IModal } from './models/IModal';
import { useTypedSelector } from './hooks/useTypedSelector';
import { closeModal } from './store/reducers/modalReducer/actions';
import { useDispatch } from 'react-redux';
import { getModal } from './helpers/getModal';
import { getPosts } from './store/reducers/postsReducer/actions';

const getModals = (modals: IModal[], handleCloseModal: () => void) => {
  return modals.map((modal, key) =>
    getModal(key, modal.type, handleCloseModal, modal.option)
  );
};

interface AppProps {
  modals: IModal[];
  handleCloseModal: () => void;
  handleGetPosts: () => void;
}

const App: FC<AppProps> = ({ modals, handleCloseModal, handleGetPosts }) => {
  useEffect(() => {
    console.log('ale');
    handleGetPosts();
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <Router />
      {getModals(modals, handleCloseModal)}
    </>
  );
};

const AppContainer = () => {
  const dispatch = useDispatch();
  const modals = useTypedSelector((state) => state.modal.modals);
  const handleCloseModal = useCallback(() => dispatch(closeModal()), []);
  const handleGetPosts = useCallback(() => dispatch(getPosts()), []);
  return (
    <App
      modals={modals}
      handleCloseModal={handleCloseModal}
      handleGetPosts={handleGetPosts}
    />
  );
};

export default AppContainer;
