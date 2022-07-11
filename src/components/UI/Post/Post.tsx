import React, { FC, memo } from 'react';
import { WrapperPost } from './Post.styled';
import { IPost } from '../../../models/IPost';
import { EModal } from '../../../models/EModal';
import Header from './widget/Header/Header';
import Content from './widget/Content/Content';
import Footer from './widget/Footer/Footer';

interface PostProps {
  post: IPost;
  handleOpenModal: (id: string, type: EModal, optional: any) => void;
  handleToUnPublish?: (postId: number) => () => void;
  handleDeletePost?: (postId: number) => () => void;
  profile?: boolean;
  isDraft?: boolean;
  token?: string;
}

const Post: FC<PostProps> = ({
  post,
  handleOpenModal,
  isDraft = false,
  token,
  profile = false,
  handleToUnPublish,
  handleDeletePost,
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
      <Footer post={post} token={token} handleOpenModal={handleOpenModal} />
    </WrapperPost>
  );
};

export default memo(Post);
