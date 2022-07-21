import React, { memo } from 'react';
import { Card } from './Settings.styled';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  nickname: yup
    .string()
    .min(2, 'Никнэйм должен иметь длину не менее 2 символов')
    .required('Это обязательное поле'),
  email: yup
    .string()
    .email('Некорректный email')
    .required('Это обязательное поле'),
  aboutUser: yup
    .string()
    .max(90, 'Пароль должен иметь длину не более 90  символов'),
});

const ProfileSettings = () => {
  const formik = useFormik({
    initialValues: {
      nickname: '',
      aboutUser: '',
    },
    validationSchema,
    onSubmit: (values) => {
      formik.setSubmitting(false);
    },
  });
  return (
    <Card>
      <Stack direction='column' spacing={3} alignItems='stretch'>
        <TextField
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
          label='О себе'
          variant='outlined'
          type='text'
          id='aboutUser'
          name='aboutUser'
          multiline
          rows={4}
          value={formik.values.aboutUser}
          onChange={formik.handleChange}
          error={formik.touched.aboutUser && Boolean(formik.errors.aboutUser)}
          helperText={formik.touched.aboutUser && formik.errors.aboutUser}
        />
        <Button variant='text'>Изменить пароль</Button>
      </Stack>
      <Button sx={{ mt: '24px' }} variant='contained'>
        Сохранить
      </Button>
    </Card>
  );
};

export default memo(ProfileSettings);
