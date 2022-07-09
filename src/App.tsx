import React, {
  FC,
  lazy,
  memo,
  Suspense,
  useCallback,
  useLayoutEffect,
} from 'react';
import Header from './containers/Header/Header';
import Sidebar from './containers/Sidebar/Sidebar';
import { IModal } from './models/IModal';
import { useTypedSelector } from './hooks/useTypedSelector';
import { closeModal } from './store/reducers/modalReducer/actions';
import { useDispatch } from 'react-redux';
import { getModal } from './helpers/getModal';
import { AuthRef } from './store/reducers/authReducer/actions';
import { Stack } from '@mui/material';
import Loader from './components/UI/Loader/Loader';

const Router = lazy(() => import('./router/Router'));

const getModals = (modals: IModal[], handleCloseModal: () => void) => {
  return modals.map((modal, key) =>
    getModal(key, modal.type, handleCloseModal, modal.option)
  );
};

interface AppProps {
  modals: IModal[];
  handleCloseModal: () => void;
  handleAuthRef: () => void;
}

const App: FC<AppProps> = memo(
  ({ modals, handleCloseModal, handleAuthRef }) => {
    useLayoutEffect(() => {
      handleAuthRef();
    }, []);

    return (
      <Suspense fallback={<Loader />}>
        <Header />
        <Stack
          sx={{ height: 'calc(100% - 64px)', width: '100%' }}
          direction='row'
          alignItems='center'
        >
          <Sidebar />
          <Router />
        </Stack>
        {getModals(modals, handleCloseModal)}
      </Suspense>
    );
  }
);

const AppContainer = () => {
  const dispatch = useDispatch();
  const modals = useTypedSelector((state) => state.modal.modals);
  const handleCloseModal = useCallback(() => dispatch(closeModal()), []);
  const handleAuthRef = useCallback(() => dispatch(AuthRef()), []);

  return (
    <App
      modals={modals}
      handleCloseModal={handleCloseModal}
      handleAuthRef={handleAuthRef}
    />
  );
};

export default AppContainer;
