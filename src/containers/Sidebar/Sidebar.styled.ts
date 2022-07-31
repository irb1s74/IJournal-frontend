import { Stack, styled } from '@mui/material';

export const WrapperSidebar = styled('div')(() => ({
  height: '100%',
  width: '260px',
  position: 'relative',
}));

export const BoxSidebar = styled(Stack)(() => ({
  top: '80px',
  position: 'fixed',
  padding: '15px 0 15px 0',
  maxWidth: '260px',
  width: '100%',
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));
