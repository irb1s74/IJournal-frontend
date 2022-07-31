import React, { FC, memo, useCallback } from 'react';
import List from '../../components/Sidebar/List/List';
import { BoxSidebar, DrawerHeader, WrapperSidebar } from './Sidebar.styled';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Divider, Drawer } from '@mui/material';
import { AppSetMenu } from '../../store/reducers/appReducer/actions';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IoFlameSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface ISidebar {
  isMenuOpen: boolean;
  handleToggleMenu: () => void;
}

const Sidebar: FC<ISidebar> = memo(({ isMenuOpen, handleToggleMenu }) => {
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate('/popular');
    handleToggleMenu();
  };

  return isMenuOpen ? (
    <>
      <Drawer
        sx={{
          display: {
            xs: 'flex',
            md: 'none',
          },
        }}
        anchor={'left'}
        open={isMenuOpen}
        onClose={handleToggleMenu}
      >
        <DrawerHeader>
          <Box
            onClick={handleToHome}
            sx={{
              width: '100%',
              display: 'flex',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant='h5' component='div' noWrap>
              VIBE
            </Typography>
            <IoFlameSharp size={24} color='#DA4A5E' />
          </Box>
        </DrawerHeader>
        <Divider />
        <List handleToggleMenu={handleToggleMenu} />
      </Drawer>
      <WrapperSidebar
        sx={{
          display: {
            xs: 'none',
            md: 'flex',
          },
        }}
      >
        <BoxSidebar
          direction='column'
          justifyContent='space-between'
          alignItems='center'
        >
          <List />
        </BoxSidebar>
      </WrapperSidebar>
    </>
  ) : null;
});

const SidebarContainer = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useTypedSelector((state) => state.app.isMenuOpen);
  const handleToggleMenu = useCallback(() => dispatch(AppSetMenu()), []);

  return (
    <Sidebar handleToggleMenu={handleToggleMenu} isMenuOpen={isMenuOpen} />
  );
};

export default SidebarContainer;
