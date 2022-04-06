import { AppDispatch, store } from '../../index';
import { EModal } from '../../../models/EModal';
import { ISetModal, ModalActionEnum } from './types';
import { IModal } from '../../../models/IModal';

export const setModals = (payload: IModal[]): ISetModal => ({
  type: ModalActionEnum.SET_MODAL,
  payload,
});

export const openModal =
  (id: string, type: EModal, option: any) => (dispatch: AppDispatch) => {
    const { modals } = store.getState().modal;
    modals.push({ id, type, option });
    dispatch(setModals([...modals]));
  };
export const closeModal = () => (dispatch: AppDispatch) => {
  const { modals } = store.getState().modal;
  modals.pop();
  dispatch(setModals([...modals]));
};
