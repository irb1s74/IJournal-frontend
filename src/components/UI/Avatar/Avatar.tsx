import React, { FC, memo } from 'react';
import { CustomAvatar } from './Avatar.styled';
import { ROOT_URL } from '../../../helpers/ROOT_URL';
import { IAuthor } from '../../../models/IAuthor';

interface AvatarProps {
  user?: IAuthor;
  profileRender?: boolean;
}

const Avatar: FC<AvatarProps> = ({ user, profileRender = false }) => {
  return (
    <CustomAvatar
      alt={user?.nickname}
      src={user?.avatar && `${ROOT_URL}avatars/${user.avatar}`}
      variant='rounded'
      profileRender={profileRender}
    />
  );
};

export default memo(Avatar);
