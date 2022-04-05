import React, { FC, memo, useCallback, useState } from 'react';
import { Dialog } from '@mui/material';
import { AuthLogin, AuthSigIn } from '../../store/reducers/authReducer/actions';
import SigIn from '../../components/Auth/SigIn';
import Login from '../../components/Auth/Login';
import { useDispatch } from 'react-redux';

interface AuthProps {
  closeModal: () => void;
  handleLogin: (email: string, password: string) => void;
  handleSigIn: (nickname: string, email: string, password: string) => void;
}
const Auth: FC<AuthProps> = memo(({ closeModal, handleLogin, handleSigIn }) => {
  const [auth, setAuth] = useState(false);
  const handleSetAuth = useCallback((payload: boolean) => {
    return () => {
      setAuth(payload);
    };
  }, []);

  return (
    <Dialog
      fullWidth
      maxWidth='xs'
      open
      onClose={closeModal}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      {auth ? (
        <SigIn
          handleSetAuth={handleSetAuth}
          closeModal={closeModal}
          handleSigIn={handleSigIn}
        />
      ) : (
        <Login
          handleSetAuth={handleSetAuth}
          closeModal={closeModal}
          handleLogin={handleLogin}
        />
      )}
    </Dialog>
  );
});

const AuthContainer: FC<{
  closeModal: () => void;
}> = ({ closeModal }) => {
  const dispatch = useDispatch();

  const Login = useCallback(
    (email: string, password: string) => dispatch(AuthLogin(email, password)),
    []
  );
  const SigIn = useCallback(
    (nickname: string, email: string, password: string) =>
      dispatch(AuthSigIn(nickname, email, password)),
    []
  );
  return (
    <Auth closeModal={closeModal} handleLogin={Login} handleSigIn={SigIn} />
  );
};
export default AuthContainer;
