import React, { FC } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { IoClose } from 'react-icons/io5';
import PostEditor from '../../components/UI/Editor/Editor';

interface CreatePostProps {
  closeModal: () => void;
  // messageError: string;
  // handleLogin: (email: string, password: string) => void;
  // handleSigIn: (nickname: string, email: string, password: string) => void;
  // handleSetError: (error: string) => void;
}

const CreatePost: FC<CreatePostProps> = ({ closeModal }) => {
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
        <PostEditor />
      </DialogContent>
      <DialogActions>
        <Button variant='contained'>Опубликовать</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreatePost;
