import React, { FC, memo } from 'react';
import { PostContent } from './ContentPost.styled';
import { Stack, Typography } from '@mui/material';
import { IPost } from '../../../../../models/IPost';
import { useNavigate } from 'react-router-dom';
import Blocks from 'editorjs-blocks-react-renderer';
import { renderConfig } from './renderConfig';

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
      <Stack alignItems='flex-start' flexDirection='column'>
        <Blocks
          data={{
            version: `${post.data.entry.version}`,
            time: post.data.entry.time ?? 10,
            blocks: post.data.entry.blocks
              ? post.data.entry.blocks.slice(0, 2)
              : [],
          }}
          config={renderConfig}
        />
      </Stack>
    </PostContent>
  );
};

export default memo(ContentPost);
