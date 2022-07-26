import { IModal } from '../../../models/IModal';
import { INotification } from '../../../models/INotification';

export interface AppState {
  isMenuOpen: boolean;
  modals: IModal[];
  notifications: INotification[];
}

export enum AppActionEnum {
  SET_MENU = 'SET_MENU',
  SET_MODAL = 'SET_MODAL',
  ENQUEUE_NOTIFICATION = 'ENQUEUE_NOTIFICATION',
  CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION',
  REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION',
}

export interface IAppSetMenu {
  type: AppActionEnum.SET_MENU;
}

export interface IAppSetModal {
  type: AppActionEnum.SET_MODAL;
  payload: IModal[];
}

export interface IAppSetNotification {
  type: AppActionEnum.ENQUEUE_NOTIFICATION;
  notification: INotification;
}

export interface IAppCloseNotification {
  type: AppActionEnum.CLOSE_NOTIFICATION;
  payload: INotification[];
}

export interface IAppRemoveNotification {
  type: AppActionEnum.REMOVE_NOTIFICATION;
  payload: INotification[];
}

export type AppAction =
  | IAppSetMenu
  | IAppSetModal
  | IAppSetNotification
  | IAppCloseNotification
  | IAppRemoveNotification;
