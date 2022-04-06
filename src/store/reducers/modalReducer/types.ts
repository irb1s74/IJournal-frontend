import { IModal } from '../../../models/IModal';

export interface ModalState {
  modals: IModal[];
}
export enum ModalActionEnum {
  SET_MODAL = 'SET_MODAL',
}

export interface ISetModal {
  type: ModalActionEnum.SET_MODAL;
  payload: IModal[];
}

export type ModalAction = ISetModal;
