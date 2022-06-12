import React, { FC, memo, useCallback, useState } from 'react';
import DropList from '../DropList/DropList';
import { WrapperPost } from './Post.styled';
import { IPost } from '../../../models/IPost';
import { EModal } from '../../../models/EModal';
import DropListItems from './widget/DropListItems';

import HeaderPost from './widget/Header/Header';
import ContentPost from './widget/Content/Content';
import FooterPost from './widget/Footer/Footer';

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

  const handleDropListOpen = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );
  const handleDropListClose = useCallback(() => setAnchorEl(null), []);

  return (
    <WrapperPost>
      <HeaderPost
        post={post}
        isDraft={isDraft}
        handleDropListOpen={handleDropListOpen}
      />
      <ContentPost post={post} />
      <FooterPost post={post} />
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
