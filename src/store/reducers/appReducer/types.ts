export interface AppState {
  isMenuOpen: boolean;
}

export enum AppActionEnum {
  SET_MENU = 'SET_MENU',
}

export interface IAppSetMenu {
  type: AppActionEnum.SET_MENU;
}

export type AppAction = IAppSetMenu;
