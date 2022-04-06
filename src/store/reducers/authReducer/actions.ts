import { AuthActionEnum, IAuthSetMessageError, IAuthSetUser } from './types';
import { IUser } from '../../../models/IUser';
import AuthService from '../../../api/AuthService';
import { AppDispatch, store } from '../../index';
import { setModals } from '../modalReducer/actions';

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

export const AuthLogin =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await AuthService.Login(email, password);
      if (response.status === 201) {
        dispatch(SetUser(response.data, true));
        const { modals } = store.getState().modal;
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
        const { modals } = store.getState().modal;
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
