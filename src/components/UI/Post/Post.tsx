import React, { FC, memo, useCallback, useState } from 'react';
import DropList from '../DropList/DropList';
import Blocks from 'editorjs-blocks-react-renderer';
import {
  PostBoxAction,
  PostContent,
  PostFooter,
  PostFooterAction,
  PostFooterVote,
  PostHeader,
  PostHeaderAction,
  PostHeaderInfo,
  WrapperPost,
} from './Post.styled';
import {
  IoBookmark,
  IoChatbubbles,
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoEllipsisHorizontalSharp,
  IoPersonAddSharp,
} from 'react-icons/io5';
import { IconButton, Typography } from '@mui/material';
import { IPost } from '../../../models/IPost';
import { EModal } from '../../../models/EModal';
import { renderConfig } from './renderConfig';
import DropListItems from './widget/DropListItems';
import Avatar from '../Avatar/Avatar';

interface PostProps {
  post: IPost;
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
  handleToUnPublish?: (postId: number) => () => void;
  handleDeletePost?: (postId: number) => () => void;
  profile?: boolean;
  isDraft?: boolean;
}

const Post: FC<PostProps> = ({
  post,
  handleOpenModal,
  profile = false,
  handleToUnPublish,
  isDraft = false,
  handleDeletePost,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isDropListOpen = Boolean(anchorEl);
  const handleDropListOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDropListClose = useCallback(() => setAnchorEl(null), []);
  return (
    <WrapperPost>
      <PostHeader>
        <PostHeaderInfo
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          spacing={2}
        >
          <Avatar user={post.author} />
          <Typography variant='subtitle1'>{post.author.nickname}</Typography>
        </PostHeaderInfo>
        <PostHeaderAction>
          {isDraft && (
            <Typography
              sx={{
                bgcolor: '#29253C',
                color: '#FFF',
                p: '5px',
                mr: '8px',
                borderRadius: '5px',
              }}
              variant='overline'
            >
              Черновик
            </Typography>
          )}
          <IconButton sx={{ fontSize: 16 }}>
            <IoPersonAddSharp />
          </IconButton>
          <IconButton onClick={handleDropListOpen} sx={{ fontSize: 16 }}>
            <IoEllipsisHorizontalSharp />
          </IconButton>
        </PostHeaderAction>
      </PostHeader>
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
      <DropList
        isDropListOpen={isDropListOpen}
        anchorEl={anchorEl}
        handleDropListClose={handleDropListClose}
      >
        <DropListItems
          post={post}
          handleOpenModal={handleOpenModal}
          profile={profile}
          handleToUnPublish={handleToUnPublish}
          handleDeletePost={handleDeletePost}
        />
      </DropList>
    </WrapperPost>
  );
};

export default memo(Post);
