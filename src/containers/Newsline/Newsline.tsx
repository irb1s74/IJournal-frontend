import React from 'react';
import { BoxNewsline } from './Newsline.styled';
import { Typography } from '@mui/material';
import Card from '../../components/UI/NewsCard/NewsCard';
import data from './config.json';
import { INews } from './types';

const Newsline = () => {
  return (
    <BoxNewsline>
      <Typography variant='h6'>News abobbas</Typography>
      {data.map((news: INews, index) => (
        <Card key={`${index}_${news.author}`} data={news} />
      ))}
    </BoxNewsline>
  );
};

const ContainerNewsline = () => {
  return <Newsline />;
};

export default ContainerNewsline;
