import React, { FC, memo } from 'react';
import { PostContent } from './ContentPost.styled';
import { Typography } from '@mui/material';
import { renderConfig } from './renderConfig';
import Blocks from 'editorjs-blocks-react-renderer';
import { IPost } from '../../../../../models/IPost';
import { useNavigate } from 'react-router-dom';

interface ContentPostProps {
  post: IPost;
}

const ContentPost: FC<ContentPostProps> = ({ post }) => {
  const navigate = useNavigate();
  const toPagePost = () => {
    navigate(`/post/${post.id}`);
  };
  return (
    <PostContent onClick={toPagePost}>
      <Typography sx={{ mb: '7px', mt: '12px' }} variant='h6'>
        {post.title}
      </Typography>
      <Blocks
        data={{
          time: 1610632160642,
          version: '2.24.3',
          blocks: post.data.entry,
        }}
        config={renderConfig}
      />
    </PostContent>
  );
};

export default memo(ContentPost);
