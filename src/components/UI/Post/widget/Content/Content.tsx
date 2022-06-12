import React, { FC, memo } from 'react';
import { PostContent } from './ContentPost.styled';
import { Typography } from '@mui/material';
import { renderConfig } from '../../renderConfig';
import Blocks from 'editorjs-blocks-react-renderer';
import { IPost } from '../../../../../models/IPost';

interface ContentPostProps {
  post: IPost;
}

const ContentPost: FC<ContentPostProps> = ({ post }) => {
  return (
    <PostContent>
      <Typography sx={{ mb: '7px', mt: '12px' }} variant='h6'>
        {post.data?.title}
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
