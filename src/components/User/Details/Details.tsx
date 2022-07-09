import React, { FC, memo, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { ISubscriber } from '../../../models/ISubscriber';
import { ISubscription } from '../../../models/ISubscription';
import Box from './widget/Box';

interface UserDetailsProps {
  handleGetUserSubscriptions: (userId: number) => void;
  subscribers: ISubscriber[];
  subscriptions: ISubscription[];
}

const UserDetails: FC<UserDetailsProps> = ({
  handleGetUserSubscriptions,
  subscriptions,
  subscribers,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id && +id) {
      handleGetUserSubscriptions(+id);
    } else {
      navigate('/');
    }
  }, []);

  return (
    <>
      <Box nameBox='Подписки' users={subscriptions} />
      <Box nameBox='Подписчики' users={subscribers} />
    </>
  );
};

export default memo(UserDetails);
