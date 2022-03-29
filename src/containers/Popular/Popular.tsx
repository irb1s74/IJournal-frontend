import React from 'react';
import { PageWrapper } from './Popular.styled';
import { Typography } from '@mui/material';
import Card from '../../components/UI/NewsCard/NewsCard';
import data from './config.json';
import { INews } from './types';

const Popular = () => {
  return (
    <PageWrapper>
      <Typography variant='h6'>News abobbas</Typography>
      {data.map((news: INews, index) => (
        <Card key={`${index}_${news.author}`} data={news} />
      ))}
    </PageWrapper>
  );
};

const ContainerPopular = () => {
  return <Popular />;
};

export default ContainerPopular;
