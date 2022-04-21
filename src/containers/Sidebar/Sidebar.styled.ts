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
