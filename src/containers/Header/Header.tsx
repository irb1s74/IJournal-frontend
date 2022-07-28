import React, { FC, memo, useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import HeaderMenu from '../../components/Header/Menu';
import Search from '../../components/UI/Search/Search';
import { Button } from '@mui/material';
import { HeaderBox } from './Header.styled';
import { IoFlameSharp, IoMenu } from 'react-icons/io5';
import { IAppSetMenu } from '../../store/reducers/appReducer/types';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { AppSetMenu, openModal } from '../../store/reducers/appReducer/actions';
import { EModal } from '../../models/EModal';
import { SetUser } from '../../store/reducers/authReducer/actions';
import { IUser } from '../../models/IUser';
import { useNavigate } from 'react-router-dom';
import { findPosts } from '../../store/reducers/postsReducer/actions';
import { IPost } from '../../models/IPost';

interface HeaderProps {
  handleToggleMenu: () => IAppSetMenu;
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
  handleSignOut: () => void;
  handleFindPosts: (content: string) => void;
  user: IUser;
  isAuth: boolean;
  foundPosts: IPost[];
}

const Header: FC<HeaderProps> = memo(
  ({
    handleToggleMenu,
    handleOpenModal,
    handleSignOut,
    handleFindPosts,
    isAuth,
    user,
    foundPosts,
  }) => {
    const handleCreatePost = () => {
      if (!isAuth) {
        return handleOpenModal(EModal.authModal, EModal.authModal, null);
      }
      return handleOpenModal(
        EModal.createPostModal,
        EModal.createPostModal,
        null
      );
    };

    const navigate = useNavigate();

    const handleToHome = () => {
      navigate('/popular');
    };

    return (
      <HeaderBox>
        <AppBar position='sticky'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 2 }}
              onClick={handleToggleMenu}
            >
              <IoMenu />
            </IconButton>
            <Box
              onClick={handleToHome}
              sx={{
                display: {
                  xs: 'none',
                  sm: 'flex',
                },
                cursor: 'pointer',
                alignItems: 'center',
              }}
            >
              <Typography variant='h5' component='div' noWrap>
                VIBE
              </Typography>
              <IoFlameSharp size={24} color='#DA4A5E' />
            </Box>
            <Search foundPosts={foundPosts} handleFindPosts={handleFindPosts} />
            <Button
              onClick={handleCreatePost()}
              variant='contained'
              color='secondary'
            >
              Новая Запись
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            <HeaderMenu
              isAuth={isAuth}
              user={user}
              handleOpenModal={handleOpenModal}
              handleSignOut={handleSignOut}
            />
          </Toolbar>
        </AppBar>
      </HeaderBox>
    );
  }
);

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const foundPosts = useTypedSelector((state) => state.posts.foundPosts);
  const user = useTypedSelector((state) => state.auth.user);
  const handleToggleMenu = useCallback(() => dispatch(AppSetMenu()), []);
  const handleSignOut = useCallback(() => {
    localStorage.removeItem('token');
    dispatch(SetUser({} as IUser, false));
  }, []);

  const handleFindPosts = useCallback((content: string) => {
    dispatch(findPosts(content));
  }, []);

  const handleOpenModal = useCallback(
    (id: string, type: EModal, optional: any) => () =>
      dispatch(openModal(id, type, optional)),
    []
  );
  return (
    <Header
      user={user}
      handleToggleMenu={handleToggleMenu}
      handleOpenModal={handleOpenModal}
      handleSignOut={handleSignOut}
      handleFindPosts={handleFindPosts}
      foundPosts={foundPosts}
      isAuth={isAuth}
    />
  );
};

export default HeaderContainer;
