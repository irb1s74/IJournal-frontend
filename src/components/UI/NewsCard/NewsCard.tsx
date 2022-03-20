import React from 'react';
import {
  Card,
  CardHeader,
  CardHeaderAction,
  CardHeaderInfo,
} from './Card.styled';
import { Avatar, IconButton, Typography } from '@mui/material';
import { IoChatbubbles, IoPersonAddSharp } from 'react-icons/io5';

const NewsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderInfo
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          spacing={2}
        >
          <Avatar
            alt='Remy Sharp'
            src='/static/images/avatar/1.jpg'
            sx={{ width: 32, height: 32 }}
          />
          <Typography variant='subtitle1'>Україна 🇺🇦</Typography>
        </CardHeaderInfo>
        <CardHeaderAction>
          <IconButton sx={{ fontSize: 16}}>
            <IoPersonAddSharp />
          </IconButton>
        </CardHeaderAction>
      </CardHeader>
    </Card>
  );
};

export default NewsCard;
