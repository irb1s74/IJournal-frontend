import React, { FC, memo } from 'react';
import { CustomAvatar } from './Avatar.styled';
import { ROOT_URL } from '../../../helpers/ROOT_URL';
import { IAuthor } from '../../../models/IAuthor';
import { IUser } from '../../../models/IUser';

interface AvatarProps {
  user?: IAuthor | IUser;
  profile?: boolean;
}

const Avatar: FC<AvatarProps> = ({ user, profile = false }) => {
  return (
    <CustomAvatar
      alt={user?.nickname}
      src={user?.avatar && `${ROOT_URL}avatars/${user.avatar}`}
      profile={!!profile}
      variant='rounded'
    />
  );
};

export default memo(Avatar);
