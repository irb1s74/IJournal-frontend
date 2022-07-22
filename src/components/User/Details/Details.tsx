import React, { FC, memo } from 'react';
import { ISubscriber } from '../../../models/ISubscriber';
import { ISubscription } from '../../../models/ISubscription';
import Box from './widget/Box';
import { EModal } from '../../../models/EModal';

interface UserDetailsProps {
  subscribers: ISubscriber[];
  subscriptions: ISubscription[];
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
}

const UserDetails: FC<UserDetailsProps> = ({
  subscriptions,
  subscribers,
  handleOpenModal,
}) => {
  return (
    <>
      <Box
        handleOpenModal={handleOpenModal}
        nameBox='Подписки'
        users={subscriptions}
      />
      <Box
        handleOpenModal={handleOpenModal}
        nameBox='Подписчики'
        users={subscribers}
      />
    </>
  );
};

export default memo(UserDetails);
