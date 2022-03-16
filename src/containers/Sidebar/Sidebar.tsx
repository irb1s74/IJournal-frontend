import React, { FC } from 'react';
import SidebarList from '../../components/Sidebar/List';
import { useDispatch } from 'react-redux';
import { BoxSidebar } from './Sidebar.styled';
import { Stack } from '@mui/material';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface ISidebar {
  isMenuOpen: boolean;
}
const Sidebar: FC<ISidebar> = ({ isMenuOpen }) => {
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

export const SidebarContainer = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useTypedSelector((state) => state.appReducer.isMenuOpen);
  return <Sidebar isMenuOpen={isMenuOpen} />;
};
export default SidebarContainer;
