import { Box, styled } from '@mui/material';

export const HeaderBox = styled(Box)(({ theme }) => ({
  position: 'sticky',
  width: '100%',
  top: '0',
}));

export const HeaderBoxLogo = styled('div')(({ theme }) => ({
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
  },
}));
