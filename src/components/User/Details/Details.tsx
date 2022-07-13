import React, { FC, memo } from 'react';
import { ISubscriber } from '../../../models/ISubscriber';
import { ISubscription } from '../../../models/ISubscription';
import Box from './widget/Box';

interface UserDetailsProps {
  subscribers: ISubscriber[];
  subscriptions: ISubscription[];
}

const UserDetails: FC<UserDetailsProps> = ({ subscriptions, subscribers }) => {
  return (
    <>
      <Box nameBox='Подписки' users={subscriptions} />
      <Box nameBox='Подписчики' users={subscribers} />
    </>
  );
};

export default memo(UserDetails);
