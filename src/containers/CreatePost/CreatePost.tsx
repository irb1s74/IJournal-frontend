import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
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
    setIsLoading(true);
    const response = await PostService.create(token);
    if (!response.data.id) {
      closeModal();
    }
    setPostId(response.data.id);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!option) {
      initialRequest();
    } else {
      setPostId(option?.id);
      setPostTitle(option?.data?.title);
      setBody(option?.data?.entry);
    }
  }, []);

  const handleUpdatePost = useDebounce((data) => {
    const updateRequest = async () => {
      setIsLoading(true);
      await PostService.update(token, data);
      setIsLoading(false);
    };
    updateRequest();
  }, 1000);

  const handleOnChangeEditor = useCallback((arr: OutputData['blocks']) => {
    setBody(arr);
  }, []);

  const handleOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(event.target.value);
  };
  useEffect(() => {
    handleUpdatePost({ postId, data: { title: postTitle, entry: body } });
  }, [body, postTitle]);

  const postToPublish = async () => {
    await PostService.makePublish(token, postId);
    closeModal();
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
      <DialogTitle sx={{ p: '10px 24px' }} id='alert-dialog-title'>
        <Stack justifyContent='space-between' direction='row'>
          <InputBase
            value={postTitle}
            placeholder='Заголовок'
            sx={{ fontSize: '28px' }}
            onChange={handleOnChangeTitle}
          />
          <Box>
            <IconButton onClick={closeModal}>
              <IoClose />
            </IconButton>
          </Box>
        </Stack>
      </DialogTitle>
      <DialogContent dividers sx={{ minHeight: '100%' }}>
        <PostEditor initialBody={body} onChange={handleOnChangeEditor} />
      </DialogContent>
      <DialogActions>
        <Stack direction='row' spacing={4}>
          {isLoading && <CircularProgress size={30} />}
          {option?.publish ? (
            <Button variant='contained'>Сохранить</Button>
          ) : (
            <Button onClick={postToPublish} variant='contained'>
              Опубликовать
            </Button>
          )}
        </Stack>
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
