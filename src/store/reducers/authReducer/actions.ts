import { AuthActionEnum, IAuthSetUser } from './types';
import { IUser } from '../../../models/IUser';
import AuthService from '../../../api/AuthService';
import { AppDispatch } from '../../index';

export const SetUser = (user: IUser, isAuth: boolean): IAuthSetUser => ({
  type: AuthActionEnum.SET_USER,
  payload: {
    user,
    isAuth,
  },
});

export const AuthLogin =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await AuthService.Login(email, password);
      dispatch(SetUser(response.data, true));
    } catch (e) {
      console.log(e);
    }
  };

export const AuthSigIn =
  (nickname: string, email: string, password: string) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await AuthService.SigIn(nickname, email, password);
      dispatch(SetUser(response.data, true));
    } catch (e) {
      console.log(e);
    }
  };
