import { ReactElement } from 'react';
import { MdLocalFireDepartment } from 'react-icons/md';
import {
  IoBookmark,
  IoListOutline,
  IoTime,
  IoNewspaper,
} from 'react-icons/io5';

const getIcon = (icon: string): ReactElement | null => {
  switch (icon) {
    case 'fire':
      return <MdLocalFireDepartment />;
    case 'time':
      return <IoTime />;
    case 'bookmark':
      return <IoBookmark />;
    case 'sub':
      return <IoListOutline />;
    case 'my':
      return <IoNewspaper />;
    default:
      return null;
  }
};

export { getIcon };
