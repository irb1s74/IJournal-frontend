import { ModalAction, ModalActionEnum, ModalState } from './types';

const initialState: ModalState = {
  modals: [],
};

export default function modalReducer(
  state = initialState,
  action: ModalAction
): ModalState {
  switch (action.type) {
    case ModalActionEnum.OPEN_MODAL:
      return { ...state, modals: action.payload };
    case ModalActionEnum.CLOSE_MODAL:
      return { ...state, modals: action.payload };
    default:
      return state;
  }
}
