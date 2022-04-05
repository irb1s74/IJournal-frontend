import { IModal } from '../../../models/IModal';

export interface ModalState {
  modals: IModal[];
}
export enum ModalActionEnum {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
}

export interface IOpenModal {
  type: ModalActionEnum.OPEN_MODAL;
  payload: IModal[];
}
export interface ICloseModal {
  type: ModalActionEnum.CLOSE_MODAL;
  payload: IModal[];
}

export type ModalAction = IOpenModal | ICloseModal;
