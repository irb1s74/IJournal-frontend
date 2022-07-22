import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { Dialog } from '@mui/material';
import {
  AuthLogin,
  AuthSigIn,
  SetMessageError,
} from '../../store/reducers/authReducer/actions';
import SigIn from '../../components/Auth/SigIn';
import Login from '../../components/Auth/Login';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface AuthProps {
  closeModal: () => void;
  messageError: string;
  handleLogin: (email: string, password: string) => void;
  handleSigIn: (nickname: string, email: string, password: string) => void;
  handleSetError: (error: string) => void;
}

const Auth: FC<AuthProps> = memo(
  ({ messageError, closeModal, handleLogin, handleSigIn, handleSetError }) => {
    const [auth, setAuth] = useState(false);
    const handleSetAuth = useCallback((payload: boolean) => {
      return () => {
        setAuth(payload);
      };
    }, []);
    useEffect(() => handleSetError(''), [auth]);

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
            messageError={messageError}
            handleSetAuth={handleSetAuth}
            closeModal={closeModal}
            handleSigIn={handleSigIn}
          />
        ) : (
          <Login
            messageError={messageError}
            handleSetAuth={handleSetAuth}
            closeModal={closeModal}
            handleLogin={handleLogin}
          />
        )}
      </Dialog>
    );
  }
);

const AuthContainer: FC<{
  closeModal: () => void;
}> = ({ closeModal }) => {
  const dispatch = useDispatch();
  const messageError = useTypedSelector((state) => state.auth.messageError);
  const Login = useCallback(
    (email: string, password: string) => dispatch(AuthLogin(email, password)),
    []
  );
  const SigIn = useCallback(
    (nickname: string, email: string, password: string) =>
      dispatch(AuthSigIn(nickname, email, password)),
    []
  );
  const setError = useCallback(
    (error: string) => dispatch(SetMessageError(error)),
    []
  );
  return (
    <Auth
      closeModal={closeModal}
      messageError={messageError}
      handleLogin={Login}
      handleSigIn={SigIn}
      handleSetError={setError}
    />
  );
};
export default AuthContainer;
