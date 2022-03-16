import React, { FC } from 'react';
import { MdLocalFireDepartment } from 'react-icons/md';
import { IoBookmark, IoListOutline, IoTime } from 'react-icons/io5';

const SidebarListItemIcon: FC<{ icon: string }> = ({ icon }) => {
  if (icon === 'fire') {
    return <MdLocalFireDepartment />;
  }
  if (icon === 'time') {
    return <IoTime />;
  }
  if (icon === 'bookmark') {
    return <IoBookmark />;
  }
  if (icon === 'sub') {
    return <IoListOutline />;
  }
  return <div />;
};

export default SidebarListItemIcon;
