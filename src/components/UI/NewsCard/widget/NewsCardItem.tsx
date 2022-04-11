import React, { FC } from 'react';
import { CardMedia } from '@mui/material';
import { IBlock } from '../../../../containers/Popular/types';
import { ItemWrapper } from '../Card.styled';

const NewsCardItem: FC<{ data: IBlock }> = ({ data }) => {
  if (data.type === 'image') {
    return <CardMedia component='img' height='350' image={data.render} />;
  }
  if (data.type === 'text') {
    return <ItemWrapper>Null</ItemWrapper>;
  }
  return <div />;
};

export default NewsCardItem;
