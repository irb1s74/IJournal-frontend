import { IUser } from '../../../models/IUser';

export interface AuthState {
  user: IUser;
  isAuth: boolean;
}

export enum AuthActionEnum {
  SET_USER = 'SET_USER',
}

export interface IAuthSetUser {
  type: AuthActionEnum.SET_USER;
  payload: {
    user: IUser;
    isAuth: boolean;
  };
}

export type AuthAction = IAuthSetUser;
