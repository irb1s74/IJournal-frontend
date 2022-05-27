import React, { FC, useCallback, useState } from 'react';
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
import { Avatar, IconButton, MenuItem, Typography } from '@mui/material';
import { IPost } from '../../../models/IPost';
import { EModal } from '../../../models/EModal';
import { renderConfig } from './renderConfig';

interface PostProps {
  post: IPost;
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
  profileRender?: boolean;
}

const Post: FC<PostProps> = ({
  post,
  handleOpenModal,
  profileRender = false,
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
          <Avatar
            alt={post.author.nickname}
            src={post.author.avatar}
            sx={{ width: 32, height: 32 }}
          />
          <Typography variant='subtitle1'>{post.author.nickname}</Typography>
        </PostHeaderInfo>
        <PostHeaderAction>
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
        {profileRender ? (
          <>
            <MenuItem
              onClick={handleOpenModal(
                EModal.createPostModal,
                EModal.createPostModal,
                post
              )}
            >
              <Typography variant='body2'>Редактировать</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleOpenModal(
                EModal.createPostModal,
                EModal.createPostModal,
                post
              )}
            >
              <Typography variant='body2'>Удалить</Typography>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              onClick={handleOpenModal(
                EModal.createPostModal,
                EModal.createPostModal,
                post
              )}
            >
              <Typography variant='body2'>Пожаловаться</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleOpenModal(
                EModal.createPostModal,
                EModal.createPostModal,
                post
              )}
            >
              <Typography variant='body2'>Скрыть</Typography>
            </MenuItem>
          </>
        )}
      </DropList>
    </WrapperPost>
  );
};

export default Post;
