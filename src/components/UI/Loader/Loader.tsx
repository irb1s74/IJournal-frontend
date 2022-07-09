import React from 'react';
import { CircularProgress, Stack } from '@mui/material';

const Loader = () => {
  return (
    <Stack
      sx={{ bgcolor: '#F2F2F2', height: '100vh' }}
      alignItems='center'
      justifyContent='center'
    >
      <CircularProgress color='secondary' />
    </Stack>
  );
};

export default Loader;
