import React, { FC, useCallback, useState } from 'react';
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
  Avatar,
  CardMedia,
  IconButton,
  MenuItem,
  Typography,
} from '@mui/material';
import {
  IoBookmark,
  IoChatbubbles,
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoEllipsisHorizontalSharp,
  IoPersonAddSharp,
} from 'react-icons/io5';
import { IPost } from '../../../models/IPost';
import { EModal } from '../../../models/EModal';
import MenuList from '../MenuList/MenuList';

const Post: FC<{
  post: IPost;
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
}> = ({ post, handleOpenModal }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuListOpen = Boolean(anchorEl);
  const handleMenuListOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuListClose = useCallback(() => setAnchorEl(null), []);
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
          <IconButton onClick={handleMenuListOpen} sx={{ fontSize: 16 }}>
            <IoEllipsisHorizontalSharp />
          </IconButton>
        </PostHeaderAction>
      </PostHeader>
      <PostContent>
        <Typography sx={{ mb: '7px', mt: '12px' }} variant='h6'>
          {post.data?.title}
        </Typography>
        {post.data.entry?.map((obj) =>
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
      </PostContent>
      <PostFooter>
        <PostFooterAction direction='row' alignItems='center' spacing={2}>
          <PostBoxAction
            // onClick={() => {
            //   console.log(this);
            // }}
            disableRipple
          >
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
      <MenuList
        isMenuListOpen={isMenuListOpen}
        anchorEl={anchorEl}
        handleMenuListClose={handleMenuListClose}
      >
        <MenuItem
          onClick={handleOpenModal(
            EModal.createPostModal,
            EModal.createPostModal,
            post
          )}
        >
          <Typography variant='body2'>Редактировать</Typography>
        </MenuItem>
      </MenuList>
    </WrapperPost>
  );
};

export default Post;
