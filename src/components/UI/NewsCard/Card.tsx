import React, { FC } from 'react';
import {
  CardBoxAction,
  CardContent,
  CardFooter,
  CardFooterAction,
  CardFooterVote,
  CardHeader,
  CardHeaderAction,
  CardHeaderInfo,
  WrapperCard,
} from './Card.styled';
import { Avatar, CardMedia, IconButton, Typography } from '@mui/material';
import {
  IoBookmark,
  IoChatbubbles,
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoPersonAddSharp,
} from 'react-icons/io5';
import { IPost } from '../../../models/IPost';
import { ROOT_URL } from '../../../helpers/ROOT_URL';

const Card: FC<{ post: IPost }> = ({ post }) => {
  return (
    <WrapperCard>
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
          <Typography variant='subtitle1'>Автор</Typography>
        </CardHeaderInfo>
        <CardHeaderAction>
          <IconButton sx={{ fontSize: 16 }}>
            <IoPersonAddSharp />
          </IconButton>
        </CardHeaderAction>
      </CardHeader>
      <CardContent>
        <Typography sx={{ mb: '7px', mt: '12px' }} variant='h6'>
          {post.data?.title}
        </Typography>
        {post.data?.entry.map((obj) =>
          obj.type === 'paragraph' ? (
            <Typography
              key={obj.id}
              dangerouslySetInnerHTML={{ __html: obj.data.text }}
            />
          ) : (
            obj.type === 'image' && (
              <CardMedia
                key={obj.id}
                component='img'
                height='194'
                image={`${obj.data.file.url}`}
                alt={obj.data.caption}
              />
            )
          )
        )}
      </CardContent>
      <CardFooter>
        <CardFooterAction direction='row' alignItems='center' spacing={2}>
          <CardBoxAction
            // onClick={() => {
            //   console.log(this);
            // }}
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
    </WrapperCard>
  );
};

export default Card;
