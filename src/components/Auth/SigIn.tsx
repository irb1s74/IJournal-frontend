import React, { FC, memo } from 'react';
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

interface SigInProps {
  handleSetAuth: (payload: boolean) => () => void;
  closeModal: () => void;
  handleSigIn: (nickname: string, email: string, password: string) => void;
  messageError: string;
}

const validationSchema = yup.object({
  nickname: yup
    .string()
    .min(8, 'Никнэйм должен иметь длину не менее 3 символов')
    .required('Это обязательное поле'),
  email: yup
    .string()
    .email('Некорректный email')
    .required('Это обязательное поле'),
  password: yup
    .string()
    .min(8, 'Пароль должен иметь длину не менее 8 символов')
    .required('Это обязательное поле'),
});

const SigIn: FC<SigInProps> = ({
  messageError,
  handleSetAuth,
  closeModal,
  handleSigIn,
}) => {
  const formik = useFormik({
    initialValues: {
      nickname: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      handleSigIn(values.nickname, values.email, values.password);
      formik.setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <DialogTitle id='alert-dialog-title'>
        <Stack justifyContent='space-between' direction='row'>
          <Typography variant='h6'>Регистрация</Typography>
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
            label='Никнэйм'
            variant='outlined'
            type='text'
            id='nickname'
            name='nickname'
            value={formik.values.nickname}
            onChange={formik.handleChange}
            error={formik.touched.nickname && Boolean(formik.errors.nickname)}
            helperText={formik.touched.nickname && formik.errors.nickname}
          />
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
          <Typography variant='body1' color='error'>
            {messageError}
          </Typography>
          <Button
            variant='contained'
            fullWidth
            type='submit'
            disabled={formik.isSubmitting}
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
          <Typography variant='subtitle1'>Уже есть аккаунт?</Typography>
          <Button variant='text' size='small' onClick={handleSetAuth(false)}>
            Войти
          </Button>
        </Stack>
      </DialogContent>
    </form>
  );
};

export default memo(SigIn);
