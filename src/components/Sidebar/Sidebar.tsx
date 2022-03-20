import React, { FC } from 'react';
import SidebarList from './widget/List';
import { BoxSidebar } from './Sidebar.styled';
import { Stack } from '@mui/material';

interface ISidebar {
  isMenuOpen: boolean;
}
export const Sidebar: FC<ISidebar> = ({ isMenuOpen }) => {
  return isMenuOpen ? (
    <BoxSidebar>
      <Stack
        sx={{ height: '100%' }}
        direction='column'
        justifyContent='space-between'
        alignItems='center'
      >
        <SidebarList />
      </Stack>
    </BoxSidebar>
  ) : null;
};

export default Sidebar;
