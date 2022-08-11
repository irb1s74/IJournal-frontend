import React, { FC, memo, useCallback } from 'react';
import List from '../../components/Sidebar/List/List';
import { BoxSidebar, DrawerHeader, WrapperSidebar } from './Sidebar.styled';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Divider, Drawer, IconButton, Stack } from '@mui/material';
import { AppSetMenu, openModal } from '../../store/reducers/appReducer/actions';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IoClose, IoFlameSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { EModal } from '../../models/EModal';

interface ISidebar {
  isMenuOpen: boolean;
  isAuth: boolean;
  handleOpenModal: (id: string, type: EModal, optional: any) => void;
  handleToggleMenu: () => void;
}

const Sidebar: FC<ISidebar> = memo(
  ({ isMenuOpen, isAuth, handleToggleMenu, handleOpenModal }) => {
    const navigate = useNavigate();
    const handleToHome = () => {
      navigate('/popular');
      handleToggleMenu();
    };
    const windowInnerWidth = window.innerWidth;

    if (windowInnerWidth < 900) {
      return (
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
            <Stack
              justifyContent='space-between'
              alignItems='center'
              direction='row'
            >
              <Box
                onClick={handleToHome}
                sx={{
                  display: 'flex',
                  cursor: 'pointer',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant='h5' component='div' noWrap>
                  IJournal
                </Typography>
                <IoFlameSharp size={24} color='#DA4A5E' />
              </Box>
              <IconButton onClick={handleToggleMenu}>
                <IoClose />
              </IconButton>
            </Stack>
          </DrawerHeader>
          <Divider />
          <List
            isAuth={isAuth}
            handleOpenModal={handleOpenModal}
            handleToggleMenu={handleToggleMenu}
          />
        </Drawer>
      );
    }
    return isMenuOpen ? (
      <>
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
            <List handleOpenModal={handleOpenModal} isAuth={isAuth} />
          </BoxSidebar>
        </WrapperSidebar>
      </>
    ) : null;
  }
);

const SidebarContainer = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useTypedSelector((state) => state.app.isMenuOpen);
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const handleToggleMenu = useCallback(() => dispatch(AppSetMenu()), []);
  const handleOpenModal = useCallback(
    (id: string, type: EModal, optional: any) =>
      dispatch(openModal(id, type, optional)),
    []
  );
  return (
    <Sidebar
      handleOpenModal={handleOpenModal}
      handleToggleMenu={handleToggleMenu}
      isAuth={isAuth}
      isMenuOpen={isMenuOpen}
    />
  );
};

export default SidebarContainer;
