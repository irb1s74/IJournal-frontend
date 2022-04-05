import { AppDispatch, store } from '../../index';
import { EModal } from '../../../models/EModal';
import { ModalActionEnum } from './types';

export const openModal =
  (id: string, type: EModal, option: any) => (dispatch: AppDispatch) => {
    const { modals } = store.getState().modal;
    modals.push({ id, type, option });
    dispatch({
      type: ModalActionEnum.OPEN_MODAL,
      payload: [...modals],
    });
  };
export const closeModal = () => (dispatch: AppDispatch) => {
  const { modals } = store.getState().modal;
  modals.pop();
  dispatch({
    type: ModalActionEnum.CLOSE_MODAL,
    payload: [...modals],
  });
};
