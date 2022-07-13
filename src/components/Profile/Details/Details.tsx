import React, { FC, memo, useEffect } from 'react';
import { ISubscriber } from '../../../models/ISubscriber';
import { ISubscription } from '../../../models/ISubscription';
import Box from './widget/Box';

interface ProfileDetailsProps {
  subscribers: ISubscriber[];
  subscriptions: ISubscription[];
}

const ProfileDetails: FC<ProfileDetailsProps> = ({
  subscriptions,
  subscribers,
}) => {
  return (
    <>
      <Box nameBox='Подписки' users={subscriptions} />
      <Box nameBox='Подписчики' users={subscribers} />
    </>
  );
};

export default memo(ProfileDetails);
