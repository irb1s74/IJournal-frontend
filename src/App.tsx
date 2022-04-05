import React, { FC, useCallback } from 'react';
import { Stack } from '@mui/material';
import Router from './router/Router';
import Header from './containers/Header/Header';
import Sidebar from './containers/Sidebar/Sidebar';
import { IModal } from './models/IModal';
import { useTypedSelector } from './hooks/useTypedSelector';
import { closeModal } from './store/reducers/modalReducer/actions';
import { useDispatch } from 'react-redux';
import { getModal } from './helpers/getModal';

const getModals = (modals: IModal[], handleCloseModal: () => void) => {
  return modals.map((modal) =>
    getModal(modal.id, modal.type, handleCloseModal, modal.option)
  );
};

const App: FC<{ modals: IModal[]; handleCloseModal: () => void }> = ({
  modals,
  handleCloseModal,
}) => {
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
      {getModals(modals, handleCloseModal)}
    </>
  );
};

const AppContainer = () => {
  const dispatch = useDispatch();
  const modals = useTypedSelector((state) => state.modal.modals);
  const handleCloseModal = useCallback(() => dispatch(closeModal()), []);
  return <App modals={modals} handleCloseModal={handleCloseModal} />;
};

export default AppContainer;
