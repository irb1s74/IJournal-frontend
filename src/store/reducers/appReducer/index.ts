import { AppAction, AppActionEnum, AppState } from './types';

const initialState: AppState = {
  isMenuOpen: true,
};
export default function appReducer(
  state = initialState,
  action: AppAction
): AppState {
  switch (action.type) {
    case AppActionEnum.SET_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
}
