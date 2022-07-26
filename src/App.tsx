import React, {
  FC,
  lazy,
  memo,
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
} from 'react';
import Header from './containers/Header/Header';
import Sidebar from './containers/Sidebar/Sidebar';
import { IModal } from './models/IModal';
import { useTypedSelector } from './hooks/useTypedSelector';
import { closeModal } from './store/reducers/appReducer/actions';
import { useDispatch } from 'react-redux';
import { getModal } from './helpers/getModal';
import { AuthRef } from './store/reducers/authReducer/actions';
import { Stack } from '@mui/material';
import Loader from './components/UI/Loader/Loader';
import { initialGetBookmarksPosts } from './store/reducers/postsReducer/actions';
import useNotifier from './hooks/useNotifier';

const Router = lazy(() => import('./router/Router'));

const getModals = (modals: IModal[], handleCloseModal: () => void) => {
  return modals.map((modal, key) =>
    getModal(key, modal.type, handleCloseModal, modal.option)
  );
};

interface AppProps {
  isAuth: boolean;
  modals: IModal[];
  handleCloseModal: () => void;
  handleAuthRef: () => void;
  handleInitialGetBookmarksPosts: () => void;
}

const App: FC<AppProps> = memo(
  ({
    modals,
    handleCloseModal,
    handleAuthRef,
    handleInitialGetBookmarksPosts,
    isAuth,
  }) => {
    useNotifier();
    useLayoutEffect(() => {
      handleAuthRef();
    }, []);

    useEffect(() => {
      if (isAuth) {
        handleInitialGetBookmarksPosts();
      }
    }, [handleInitialGetBookmarksPosts]);

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
  const modals = useTypedSelector((state) => state.app.modals);
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const token = useTypedSelector((state) => state.auth.user.token);
  const handleCloseModal = useCallback(() => dispatch(closeModal()), []);
  const handleAuthRef = useCallback(() => dispatch(AuthRef()), []);

  const handleInitialGetBookmarksPosts = useCallback(
    () => dispatch(initialGetBookmarksPosts(token)),
    [token]
  );

  return (
    <App
      isAuth={isAuth}
      handleInitialGetBookmarksPosts={handleInitialGetBookmarksPosts}
      modals={modals}
      handleCloseModal={handleCloseModal}
      handleAuthRef={handleAuthRef}
    />
  );
};

export default AppContainer;
