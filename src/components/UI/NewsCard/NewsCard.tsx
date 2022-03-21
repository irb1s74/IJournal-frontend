import React, { FC } from 'react';
import {
  Card,
  CardHeader,
  CardHeaderAction,
  CardHeaderInfo,
  CardFooter,
  CardFooterAction,
  CardBoxAction,
  CardFooterVote,
  CardContent,
} from './Card.styled';
import { Avatar, IconButton, Typography } from '@mui/material';
import {
  IoChatbubbles,
  IoPersonAddSharp,
  IoBookmark,
  IoChevronUpOutline,
  IoChevronDownOutline,
} from 'react-icons/io5';
import CardItem from './widget/NewsCardItem';
import { IBlock, INews } from '../../../containers/Newsline/types';

const NewsCard: FC<{ data: INews }> = ({ data }) => {
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
          <Typography variant='subtitle1'>{data.author}</Typography>
        </CardHeaderInfo>
        <CardHeaderAction>
          <IconButton sx={{ fontSize: 16 }}>
            <IoPersonAddSharp />
          </IconButton>
        </CardHeaderAction>
      </CardHeader>
      <CardContent>
        <Typography
          sx={{ pl: '20px', pr: '20px', mb: '7px', mt: '12px' }}
          variant='h6'
        >
          {data.title}
        </Typography>
        {data.entry.blocks.map((blocks: IBlock, index) => (
          <CardItem key={`${index}_${blocks.type}`} data={blocks} />
        ))}
      </CardContent>
      <CardFooter>
        <CardFooterAction direction='row' alignItems='center' spacing={2}>
          <CardBoxAction
            onClick={() => {
              console.log(this);
            }}
            disableRipple
          >
            <IoChatbubbles />
            <Typography sx={{ ml: '8px' }} variant='subtitle1'>
              52
            </Typography>
          </CardBoxAction>
          <CardBoxAction>
            <IoBookmark />
          </CardBoxAction>
        </CardFooterAction>
        <CardFooterVote direction='row' alignItems='center' spacing={1}>
          <IconButton>
            <IoChevronDownOutline />
          </IconButton>
          <Typography color='green' variant='subtitle1'>
            60
          </Typography>
          <IconButton>
            <IoChevronUpOutline />
          </IconButton>
        </CardFooterVote>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
