import React, { FC, useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import { IoClose } from 'react-icons/io5';
import Typography from '@mui/material/Typography';

interface AuthProps {
  isOpen: boolean;
  closeModal: () => () => void;
}

const Auth: FC<AuthProps> = ({ isOpen, closeModal }) => {
  const [sign, setSign] = useState(true);

  const handleSetSign = (payload: boolean) => {
    return () => {
      setSign(payload);
    };
  };

  if (sign) {
    return (
      <Dialog
        fullWidth
        maxWidth='xs'
        open={isOpen}
        onClose={closeModal()}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          <Stack justifyContent='space-between' direction='row'>
            <Typography variant='h6'>Регистрация</Typography>
            <IconButton onClick={closeModal()}>
              <IoClose />
            </IconButton>
          </Stack>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Stack
            direction='column'
            justifyContent='space-between'
            alignItems='center'
            spacing={2}
            sx={{ p: '8px' }}
          >
            <TextField
              fullWidth
              id='standard-basic'
              label='Никнэйм'
              variant='outlined'
            />
            <TextField
              fullWidth
              id='standard-basic'
              label='E-mail'
              variant='outlined'
            />
            <TextField
              fullWidth
              id='standard-basic'
              label='Пароль'
              variant='outlined'
            />
            <Button
              variant='contained'
              // onClick={handleClose}
              fullWidth
            >
              Зарегистрироваться
            </Button>
            <Button variant='text'>Не помню пароль </Button>
          </Stack>
        </DialogContent>
        <Divider />
        <DialogContent>
          <Stack
            direction='column'
            justifyContent='space-between'
            alignItems='center'
          >
            <Typography variant='body1'>Уже есть аккаунт?</Typography>
            <Button
              variant='text'
              size='small'
              // sx={{}}
              onClick={handleSetSign(false)}
            >
              Войти
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog
      fullWidth
      maxWidth='xs'
      open={isOpen}
      onClose={closeModal()}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        <Stack justifyContent='space-between' direction='row'>
          <Typography variant='h6'>Авторизация</Typography>
          <IconButton onClick={closeModal()}>
            <IoClose />
          </IconButton>
        </Stack>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Stack
          direction='column'
          justifyContent='space-between'
          alignItems='center'
          spacing={2}
          sx={{ p: '8px' }}
        >
          <TextField
            fullWidth
            id='standard-basic'
            label='E-mail'
            variant='outlined'
          />
          <TextField
            fullWidth
            id='standard-basic'
            label='Пароль'
            variant='outlined'
          />
          <Button
            variant='contained'
            // onClick={handleClose}
            fullWidth
          >
            Войти
          </Button>
          <Button variant='text'>Не помню пароль </Button>
        </Stack>
      </DialogContent>
      <Divider />
      <DialogContent>
        <Stack
          direction='column'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='body1'>Нету аккаунт?</Typography>
          <Button
            variant='text'
            size='small'
            onClick={handleSetSign(true)}
          >
            зарегистрироваться
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default Auth;
