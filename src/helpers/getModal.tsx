import AuthContainer from '../containers/Auth/Auth';
import CreatePost from '../containers/PostEditor/PostEditor';
import ModalList from '../components/UI/ModalList/ModalList';
import { ReactElement } from 'react';
import { EModal } from '../models/EModal';

const getModal = (
  id: number,
  type: EModal,
  onClose: () => void,
  option: any
): ReactElement | null => {
  switch (type) {
    case EModal.authModal:
      return <AuthContainer key={id} closeModal={onClose} />;
    case EModal.createPostModal:
      return <CreatePost key={id} closeModal={onClose} option={option} />;
    case EModal.modalList:
      return <ModalList key={id} closeModal={onClose} option={option} />;
    default:
      return null;
  }
};
export { getModal };
