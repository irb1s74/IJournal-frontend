import React, { useCallback, useState } from 'react';
import { EditorBlock } from 'draft-js';
import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { IoMove, IoAddOutline, IoPersonCircleSharp } from 'react-icons/io5';

const EditorBox = (props: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleMenuClose = () => () => setAnchorEl(null);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='flex-start'
        spacing={2}
      >
        <IconButton onClick={handleProfileMenuOpen}>
          <IoAddOutline />
        </IconButton>
        <EditorBlock {...props} />
      </Stack>
      <Menu
        id='editor-block-menu'
        keepMounted
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose()}
      >
        <MenuItem onClick={handleMenuClose()}>
          <ListItemIcon sx={{ color: '#29253C' }}>
            <IoPersonCircleSharp />
          </ListItemIcon>
          <Typography variant='body2'>Профиль</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default EditorBox;
