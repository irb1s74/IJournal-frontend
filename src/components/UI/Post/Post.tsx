import React, { FC, memo } from 'react';
import { WrapperPost } from './Post.styled';
import { IPost } from '../../../models/IPost';
import { EModal } from '../../../models/EModal';
import Header from './widget/Header/Header';
import Content from './widget/Content/Content';
import Footer from './widget/Footer/Footer';

interface PostProps {
  post: IPost;
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
  handleToUnPublish?: (postId: number) => () => void;
  handleDeletePost?: (postId: number) => () => void;
  handleToBookmarks?: (postId: number, inBookmark: boolean) => void;
  profile?: boolean;
  isDraft?: boolean;
  inBookmarks?: boolean;
  token?: string;
}

const Post: FC<PostProps> = ({
  post,
  handleOpenModal,
  isDraft = false,
  token,
  profile = false,
  inBookmarks = false,
  handleToUnPublish,
  handleDeletePost,
  handleToBookmarks,
}) => {
  return (
    <WrapperPost>
      <Header
        post={post}
        profile={profile}
        isDraft={isDraft}
        handleOpenModal={handleOpenModal}
        handleToUnPublish={handleToUnPublish}
        handleDeletePost={handleDeletePost}
      />
      <Content post={post} />
      <Footer
        post={post}
        token={token}
        handleOpenModal={handleOpenModal}
        inBookmarks={inBookmarks}
        handleToBookmarks={handleToBookmarks}
      />
    </WrapperPost>
  );
};

export default memo(Post);
