import React, { FC, memo } from 'react';
import {
  PostBoxAction,
  PostFooter,
  PostFooterAction,
  PostFooterVote,
} from './FooterPost.styled';
import {
  IoBookmark,
  IoChatbubbles,
  IoChevronDownOutline,
  IoChevronUpOutline,
} from 'react-icons/io5';
import { IconButton, Typography } from '@mui/material';
import { IPost } from '../../../../../models/IPost';

interface FooterPostProps {
  post: IPost;
}

const FooterPost: FC<FooterPostProps> = ({ post }) => {
  return (
    <PostFooter>
      <PostFooterAction direction='row' alignItems='center' spacing={2}>
        <PostBoxAction disableRipple>
          <IoChatbubbles />
          <Typography sx={{ ml: '8px' }} variant='subtitle1'>
            52
          </Typography>
        </PostBoxAction>
        <PostBoxAction>
          <IoBookmark />
        </PostBoxAction>
      </PostFooterAction>
      <PostFooterVote direction='row' alignItems='center' spacing={1}>
        <IconButton>
          <IoChevronDownOutline />
        </IconButton>
        <Typography color='green' variant='subtitle1'>
          {post.rating}
        </Typography>
        <IconButton>
          <IoChevronUpOutline />
        </IconButton>
      </PostFooterVote>
    </PostFooter>
  );
};

export default memo(FooterPost);
