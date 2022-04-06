import { AuthAction, AuthActionEnum, AuthState } from './types';
import { IUser } from '../../../models/IUser';

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  messageError: '',
};
export default function appReducer(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionEnum.SET_USER:
      return {
        ...state,
        user: action.payload.user,
        isAuth: action.payload.isAuth,
      };
    case AuthActionEnum.SET_MESSAGE_ERROR:
      return {
        ...state,
        messageError: action.payload,
      };
    default:
      return state;
  }
}
