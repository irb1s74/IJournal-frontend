import { styled } from '@mui/material';

export const HeaderBoxLogo = styled('div')(({ theme }) => ({
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
  },
}));
