import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputBase,
  Stack,
} from '@mui/material';
import { IoClose } from 'react-icons/io5';
import PostEditor from '../../components/UI/Editor/Editor';
import { OutputData } from '@editorjs/editorjs';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import PostService from '../../api/PostService';
import { useDebounce } from '../../hooks/useDebounce';

interface CreatePostProps {
  closeModal: () => void;
  token: string;
  option: any;
  // messageError: string;
  // handleLogin: (email: string, password: string) => void;
  // handleSigIn: (nickname: string, email: string, password: string) => void;
  // handleSetError: (error: string) => void;
}

const CreatePost: FC<CreatePostProps> = ({ closeModal, token, option }) => {
  const [body, setBody] = useState<OutputData['blocks']>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [postId, setPostId] = useState<number>(0);
  const [postTitle, setPostTitle] = useState('');

  const initialRequest = async () => {
    const response = await PostService.create(token);
    if (!response.data.id) {
      closeModal();
    }
    setPostId(response.data.id);
  };

  useEffect(() => {
    setIsLoading(true);
    if (!option) {
      initialRequest();
    } else {
      setPostId(option?.id);
      setPostTitle(option?.data?.title);
      setBody(option?.data?.entry);
    }
    setIsLoading(false);
  }, []);

  const handleUpdatePost = useDebounce((data) => {
    setIsLoading(true);
    PostService.update(token, data);
    setIsLoading(false);
  }, 1000);

  useEffect(() => {
    handleUpdatePost({ postId, data: { title: postTitle, entry: body } });
  }, [body, postTitle]);

  const handleOnChangeEditor = useCallback((arr: OutputData['blocks']) => {
    setBody(arr);
  }, []);

  const handleOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(event.target.value);
  };

  return (
    <Dialog
      fullWidth
      open
      maxWidth='md'
      onClose={closeModal}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        <Stack justifyContent='space-between' direction='row-reverse'>
          <IconButton onClick={closeModal}>
            <IoClose />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ minHeight: '100%' }}>
        <InputBase
          placeholder='Заголовок'
          sx={{ fontSize: '28px', ml: '40px', mb: '10px' }}
          onChange={handleOnChangeTitle}
        />
        <PostEditor initialBody={body} onChange={handleOnChangeEditor} />
      </DialogContent>
      <DialogActions>
        <Button variant='contained'>Опубликовать</Button>
      </DialogActions>
    </Dialog>
  );
};

const ContainerCreatePost: FC<{ closeModal: () => void; option: any }> = ({
  closeModal,
  option,
}) => {
  const token = useTypedSelector((state) => state.auth.user.token);
  return <CreatePost closeModal={closeModal} token={token} option={option} />;
};
export default ContainerCreatePost;
