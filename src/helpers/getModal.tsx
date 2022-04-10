import { EModal } from '../models/EModal';
import AuthContainer from '../containers/Auth/Auth';
import { ReactElement } from 'react';
import CreatePost from '../containers/CreatePost/CreatePost';

const getModal = (
  id: string,
  type: EModal,
  onClose: () => void,
  option: any
): ReactElement | null => {
  switch (type) {
    case EModal.authModal:
      return <AuthContainer closeModal={onClose} />;
    case EModal.createPostModal:
      return <CreatePost closeModal={onClose} />;
    default:
      return null;
  }
};
export { getModal };
