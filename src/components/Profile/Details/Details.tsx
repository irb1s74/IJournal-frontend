import React, { FC, memo, useEffect } from 'react';
import { ISubscriber } from '../../../models/ISubscriber';
import { ISubscription } from '../../../models/ISubscription';
import Box from './widget/Box';

interface ProfileDetailsProps {
  handleGetUserSubscriptions: () => void;
  subscribers: ISubscriber[];
  subscriptions: ISubscription[];
}

const ProfileDetails: FC<ProfileDetailsProps> = ({
  handleGetUserSubscriptions,
  subscriptions,
  subscribers,
}) => {
  useEffect(() => {
    handleGetUserSubscriptions();
  }, []);

  return (
    <>
      <Box nameBox='Подписки' users={subscriptions} />
      <Box nameBox='Подписчики' users={subscribers} />
    </>
  );
};

export default memo(ProfileDetails);
