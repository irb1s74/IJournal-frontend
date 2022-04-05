import React, { FC, memo } from 'react';
import List from '../../components/Sidebar/List/List';
import { BoxSidebar } from './Sidebar.styled';
import { Stack } from '@mui/material';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface ISidebar {
  isMenuOpen: boolean;
}
const Sidebar: FC<ISidebar> = memo(({ isMenuOpen }) => {
  return isMenuOpen ? (
    <BoxSidebar>
      <Stack
        sx={{ height: '100%' }}
        direction='column'
        justifyContent='space-between'
        alignItems='center'
      >
        <List />
      </Stack>
    </BoxSidebar>
  ) : null;
});

const SidebarContainer = () => {
  const isMenuOpen = useTypedSelector((state) => state.app.isMenuOpen);

  return <Sidebar isMenuOpen={isMenuOpen} />;
};

export default SidebarContainer;
