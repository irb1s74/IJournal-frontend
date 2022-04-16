import React, { FC, memo } from 'react';
import { PageWrapper } from './Popular.styled';
import { Typography } from '@mui/material';
import Card from '../../components/UI/NewsCard/Card';
import data from './config.json';
import { INews } from './types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IPost } from '../../models/IPost';

const Popular:FC<{newPost: IPost[]}> = memo(({newPost}) => {
  return (
    <PageWrapper>
      <Typography variant='h6'>NEWS</Typography>
      {newPost.map((news: IPost, index) => (
        <Card key={`${index}_`} data={news} />
      ))}
    </PageWrapper>
  );
});

const ContainerPopular = () => {
  const newPost = useTypedSelector((state)=> state.posts.News)
  return <Popular newPost={newPost}/>;
};

export default ContainerPopular;
