import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Button,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { IoClose } from 'react-icons/io5';

interface LoginProps {
  handleSetAuth: (payload: boolean) => () => void;
  closeModal: () => void;
  handleLogin: (email: string, password: string) => void;
  messageError: string;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Некорректный email')
    .required('Это обязательное поле'),
  password: yup.string().required('Это обязательное поле'),
});

const Login: FC<LoginProps> = ({
  messageError,
  handleSetAuth,
  closeModal,
  handleLogin,
}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      handleLogin(values.email, values.password);
      formik.setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <DialogTitle id='alert-dialog-title'>
        <Stack justifyContent='space-between' direction='row'>
          <Typography variant='h6'>Авторизация</Typography>
          <IconButton onClick={closeModal}>
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
            label='E-mail'
            variant='outlined'
            type='email'
            id='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            label='Пароль'
            variant='outlined'
            type='password'
            id='password'
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            variant='contained'
            fullWidth
            type='submit'
            disabled={formik.isSubmitting}
          >
            Войти
          </Button>
          <Typography variant='body1' color='error'>
            {messageError}
          </Typography>
          <Button variant='filter'>Не помню пароль</Button>
        </Stack>
      </DialogContent>
      <Divider />
      <DialogContent>
        <Stack
          direction='column'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='subtitle1'>Нету аккаунт?</Typography>
          <Button variant='text' onClick={handleSetAuth(true)}>
            зарегистрироваться
          </Button>
        </Stack>
      </DialogContent>
    </form>
  );
};

export default Login;
