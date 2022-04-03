import { styled } from '@mui/material';

export const BoxSidebar = styled('div')(() => ({
  height: 'calc(100vh - 64px)',
  padding: '15px 0 15px 0',
  position: 'sticky',
  top: '64px',
  maxWidth: '260px',
  width: '100%',
  // boxShadow: 'rgba(4, 17, 29, 0.25) 0 0 8px 0',
}));
