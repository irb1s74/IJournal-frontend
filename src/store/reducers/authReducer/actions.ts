import { AuthActionEnum, IAuthSetMessageError, IAuthSetUser } from './types';
import { IUser } from '../../../models/IUser';
import AuthService from '../../../api/AuthService';
import { AppDispatch, store } from '../../index';
import { setModals } from '../appReducer/actions';

export const SetUser = (user: IUser, isAuth: boolean): IAuthSetUser => ({
  type: AuthActionEnum.SET_USER,
  payload: {
    user,
    isAuth,
  },
});
export const SetMessageError = (error: string): IAuthSetMessageError => ({
  type: AuthActionEnum.SET_MESSAGE_ERROR,
  payload: error,
});

export const AuthRef = () => async (dispatch: AppDispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await AuthService.Ref(token);
      if (response.data.token) {
        dispatch(SetUser(response.data, true));
        localStorage.setItem('token', response.data.token);
      } else {
        dispatch(SetUser({} as IUser, false));
        localStorage.removeItem('token');
      }
    } else {
      dispatch(SetUser({} as IUser, false));
    }
  } catch (e) {
    localStorage.removeItem('token');
    dispatch(SetUser({} as IUser, false));
    dispatch(SetMessageError('Произошла ошибка'));
  }
};

export const AuthLogin =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await AuthService.Login(email, password);
      if (response.data.token) {
        dispatch(SetUser(response.data, true));
        localStorage.setItem('token', response.data.token);
        const { modals } = store.getState().app;
        modals.pop();
        dispatch(setModals([...modals]));
      }
      if (response.data.message) {
        dispatch(SetUser({} as IUser, false));
        dispatch(SetMessageError(response.data.message));
      }
    } catch (e) {
      dispatch(SetUser({} as IUser, false));
      dispatch(SetMessageError('Произошла ошибка'));
    }
  };

export const AuthSigIn =
  (nickname: string, email: string, password: string) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await AuthService.SigIn(nickname, email, password);
      if (response.status === 201) {
        dispatch(SetUser(response.data, true));
        localStorage.setItem('token', response.data.token);
        const { modals } = store.getState().app;
        modals.pop();
        dispatch(setModals([...modals]));
      }
      if (response.data.message) {
        dispatch(SetUser({} as IUser, false));
        dispatch(SetMessageError(response.data.message));
      } else {
        dispatch(SetUser({} as IUser, false));
        dispatch(SetMessageError('Произошла ошибка'));
      }
    } catch (e) {
      dispatch(SetUser({} as IUser, false));
      dispatch(SetMessageError('Произошла ошибка'));
    }
  };
