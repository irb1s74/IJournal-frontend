import React, { FC, memo } from 'react';
import List from '../../components/Sidebar/List/List';
import { BoxSidebar, WrapperSidebar } from './Sidebar.styled';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface ISidebar {
  isMenuOpen: boolean;
}

const Sidebar: FC<ISidebar> = memo(({ isMenuOpen }) => {
  return isMenuOpen ? (
    <WrapperSidebar>
      <BoxSidebar
        direction='column'
        justifyContent='space-between'
        alignItems='center'
      >
        <List />
      </BoxSidebar>
    </WrapperSidebar>
  ) : null;
});

const SidebarContainer = () => {
  const isMenuOpen = useTypedSelector((state) => state.app.isMenuOpen);
  return <Sidebar isMenuOpen={isMenuOpen} />;
};

export default SidebarContainer;
