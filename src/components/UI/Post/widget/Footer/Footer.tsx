import React, { FC, memo, useState } from 'react';
import {
  PostBoxAction,
  PostFooter,
  PostFooterAction,
  PostFooterVote,
} from './FooterPost.styled';
import {
  IoBookmark,
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
  inBookmarks: boolean;
}

const FooterPost: FC<FooterPostProps> = ({
  post,
  handleOpenModal,
  token,
  inBookmarks,
}) => {
  const [footerData, setFooterData] = useState({
    isLoading: false,
    rating: post.rating,
    inBookmarks,
  });

  const toBookmarks = async () => {
    if (token) {
      setFooterData({ ...footerData, isLoading: true });
      const response = await PostService.toBookmark(token, post.id);
      if (response.status === 201) {
        setFooterData({
          ...footerData,
          isLoading: false,
          inBookmarks: true,
        });
      }
      if (response.data.status === 200) {
        setFooterData({
          ...footerData,
          isLoading: false,
          inBookmarks: false,
        });
      }
    } else {
      handleOpenModal(EModal.authModal, EModal.authModal, {});
    }
  };

  const increaseRatingPost = async () => {
    if (token) {
      setFooterData({ ...footerData, isLoading: true });
      const response = await PostService.increaseRatingPost(post.id, token);
      setFooterData({
        ...footerData,
        isLoading: false,
        rating: response.data.rating,
      });
    } else {
      handleOpenModal(EModal.authModal, EModal.authModal, {});
    }
  };
  const decreaseRatingPost = async () => {
    if (token) {
      setFooterData({ ...footerData, isLoading: true });
      const response = await PostService.decreaseRatingPost(post.id, token);
      setFooterData({
        ...footerData,
        isLoading: false,
        rating: response.data.rating,
      });
    } else {
      handleOpenModal(EModal.authModal, EModal.authModal, {});
    }
  };

  const setColor = () => {
    if (footerData.rating > 0) {
      return '#388e3c';
    }
    if (footerData.rating < 0) {
      return '#d32f2f';
    }
    return '#757575';
  };

  return (
    <PostFooter>
      <PostFooterVote direction='row' alignItems='center'>
        <IconButton
          disabled={footerData.isLoading}
          onClick={decreaseRatingPost}
        >
          <IoChevronDownOutline />
        </IconButton>
        <Typography
          sx={{ width: '28px' }}
          textAlign='center'
          color={setColor}
          variant='subtitle1'
        >
          {+footerData.rating}
        </Typography>
        <IconButton
          onClick={increaseRatingPost}
          disabled={footerData.isLoading}
        >
          <IoChevronUpOutline />
        </IconButton>
      </PostFooterVote>
      <PostFooterAction direction='row' alignItems='center' spacing={2}>
        <PostBoxAction
          onClick={toBookmarks}
          disabled={footerData.isLoading}
          color={footerData.inBookmarks ? 'secondary' : 'default'}
        >
          <IoBookmark />
        </PostBoxAction>
      </PostFooterAction>
    </PostFooter>
  );
};

export default memo(FooterPost);
