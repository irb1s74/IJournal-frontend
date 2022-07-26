import { AppAction, AppActionEnum, AppState } from './types';

const initialState: AppState = {
  isMenuOpen: true,
  modals: [],
  notifications: [],
};
export default function appReducer(
  state = initialState,
  action: AppAction
): AppState {
  switch (action.type) {
    case AppActionEnum.SET_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case AppActionEnum.SET_MODAL:
      return { ...state, modals: action.payload };
    case AppActionEnum.ENQUEUE_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.notification],
      };
    case AppActionEnum.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: action.payload,
      };
    case AppActionEnum.CLOSE_NOTIFICATION:
      return {
        ...state,
        notifications: action.payload,
      };
    default:
      return state;
  }
}
