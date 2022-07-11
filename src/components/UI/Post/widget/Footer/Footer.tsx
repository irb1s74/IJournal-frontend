import React, { FC, memo, useState } from 'react';
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
import PostService from '../../../../../api/PostService';
import { EModal } from '../../../../../models/EModal';

interface FooterPostProps {
  post: IPost;
  handleOpenModal: (id: string, type: EModal, optional: any) => void;
  token: string | undefined;
}

const FooterPost: FC<FooterPostProps> = ({ post, handleOpenModal, token }) => {
  const [footerData, setFooterData] = useState({
    isLoading: false,
    rating: post.rating,
  });

  const increaseRatingPost = async () => {
    if (token) {
      setFooterData({ ...footerData, isLoading: true });
      const response = await PostService.increaseRatingPost(post.id, token);
      console.log(response);

      setFooterData({ ...footerData, isLoading: false });
    } else {
      handleOpenModal(EModal.authModal, EModal.authModal, {});
    }
  };
  const decreaseRatingPost = async () => {
    if (token) {
      setFooterData({ ...footerData, isLoading: true });
      const response = await PostService.decreaseRatingPost(post.id, token);
      console.log(response);
      setFooterData({ ...footerData, isLoading: false });
    } else {
      handleOpenModal(EModal.authModal, EModal.authModal, {});
    }
  };

  const setColor = () => {
    if (post.rating > 0) {
      return '#388e3c';
    }
    if (post.rating < 0) {
      return '#d32f2f';
    }
    return '#757575';
  };

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
        <IconButton
          disabled={footerData.isLoading}
          onClick={decreaseRatingPost}
        >
          <IoChevronDownOutline />
        </IconButton>
        <Typography color={setColor} variant='subtitle1'>
          {+post.rating}
        </Typography>
        <IconButton
          disabled={footerData.isLoading}
          onClick={increaseRatingPost}
        >
          <IoChevronUpOutline />
        </IconButton>
      </PostFooterVote>
    </PostFooter>
  );
};

export default memo(FooterPost);
