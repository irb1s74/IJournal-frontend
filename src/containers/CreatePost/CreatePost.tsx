import React, { FC, useEffect, useState } from 'react';
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
import Typography from '@mui/material/Typography';
import { IoClose } from 'react-icons/io5';
import PostEditor from '../../components/UI/Editor/Editor';
import { OutputData } from '@editorjs/editorjs';
import PostService from '../../api/PostService';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface CreatePostProps {
  closeModal: () => void;
  token: string;
  // messageError: string;
  // handleLogin: (email: string, password: string) => void;
  // handleSigIn: (nickname: string, email: string, password: string) => void;
  // handleSetError: (error: string) => void;
}

const CreatePost: FC<CreatePostProps> = ({ closeModal, token }) => {
  // const [title, setTitle] = useState('');
  const initialRequest = async () => {
    await PostService.create(token);
  };
  useEffect(() => {
    const post = initialRequest();
    console.log(post);
  }, []);
  const [body, setBody] = useState<OutputData['blocks']>([]);

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
        <Stack justifyContent='space-between' direction='row'>
          <Typography variant='h6'>Создание Поста</Typography>
          <IconButton onClick={closeModal}>
            <IoClose />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ height: '50vh' }}>
        <InputBase
          placeholder='Заголовок'
          sx={{ fontSize: '28px', ml: '40px', mb: '10px' }}
        />
        <PostEditor initialBody={body} onChange={(arr) => setBody(arr)} />
      </DialogContent>
      <DialogActions>
        <Button variant='contained'>Опубликовать</Button>
      </DialogActions>
    </Dialog>
  );
};

const ContainerCreatePost: FC<{ closeModal: () => void }> = ({
  closeModal,
}) => {
  const token = useTypedSelector((state) => state.auth.user.token);
  return <CreatePost closeModal={closeModal} token={token} />;
};
export default ContainerCreatePost;
