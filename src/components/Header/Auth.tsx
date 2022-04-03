import React, { FC } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';

import { IoClose } from 'react-icons/io5';
import Typography from '@mui/material/Typography';

interface AuthProps {
  isOpen: boolean;
}

const Auth: FC<AuthProps> = ({ isOpen }) => {
  return (
    <Dialog
      fullWidth
      maxWidth='xs'
      open={isOpen}
      // onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        <Stack justifyContent='space-between' direction='row'>
          <Typography variant='h6'>Регистрация</Typography>
          <IconButton>
            <IoClose />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack
          direction='column'
          justifyContent='space-between'
          alignItems='center'
          spacing={2}
          // sx={{ width: '70%', }}
        >
          <TextField
            fullWidth
            id='standard-basic'
            label='Никнэйм'
            variant='standard'
          />
          <TextField
            fullWidth
            id='standard-basic'
            label='E-mail'
            variant='standard'
          />
          <TextField
            fullWidth
            id='standard-basic'
            label='Пароль'
            variant='standard'
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          variant='text'
          size='small'
          sx={{ mr: 'auto' }}
          // onClick={handleClose}
        >
          Уже есть аккаунт?
        </Button>
        <Button
          size='small'
          variant='contained'
          // onClick={handleClose}
        >
          Зарегистрироваться
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Auth;
