import {
  AppActionEnum,
  IAppCloseNotification,
  IAppSetMenu,
  IAppSetModal,
  IAppSetNotification,
} from './types';
import { IModal } from '../../../models/IModal';
import { EModal } from '../../../models/EModal';
import { AppDispatch, store } from '../../index';
import { INotification } from '../../../models/INotification';

export const AppSetMenu = (): IAppSetMenu => ({ type: AppActionEnum.SET_MENU });

export const setModals = (payload: IModal[]): IAppSetModal => ({
  type: AppActionEnum.SET_MODAL,
  payload,
});

export const enqueueNotification = (
  notification: INotification
): IAppSetNotification => {
  const key = notification.options && notification.options.id;
  return {
    type: AppActionEnum.ENQUEUE_NOTIFICATION,
    notification: {
      ...notification,
      key: key || new Date().getTime() + Math.random(),
    },
  };
};

export const closeNotification = (
  key: string | number
): IAppCloseNotification => {
  const dismissAll = !key;
  const { notifications } = store.getState().app;
  const payload = notifications.map((notification) =>
    dismissAll || notification.key === key
      ? { ...notification, dismissed: true }
      : { ...notification }
  );
  return {
    type: AppActionEnum.CLOSE_NOTIFICATION,
    payload,
  };
};

export const removeNotification = (key: string | number) => {
  const { notifications } = store.getState().app;
  const payload = notifications.filter(
    (notification) => notification.key !== key
  );
  return {
    type: AppActionEnum.REMOVE_NOTIFICATION,
    payload,
  };
};

export const openModal =
  (id: string, type: EModal, option: any) => (dispatch: AppDispatch) => {
    const { modals } = store.getState().app;
    modals.push({ id, type, option });
    dispatch(setModals([...modals]));
  };

export const closeModal = () => (dispatch: AppDispatch) => {
  const { modals } = store.getState().app;
  modals.pop();
  dispatch(setModals([...modals]));
};
