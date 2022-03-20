import React from 'react';
import { BoxNewsline } from './Newsline.styled';
import { Typography } from '@mui/material';
import Card from '../../components/UI/NewsCard/NewsCard';

const Newsline = () => {
  return (
    <BoxNewsline>
      <Typography variant='h6'>News abobbas</Typography>
      <Card />
    </BoxNewsline>
  );
};

export default Newsline;
