import { Button, styled } from '@mui/material';

export const BoxSubscribe = styled('div')(({ theme }) => ({
  height: '96vh',
  marginTop: '4vh',
  flexGrow: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column',
}));

export const ButtonSubscribe = styled(Button)(({ theme }) => ({
  minWidth: '0px',
  fontSize: '16px',
  fontWeight: 'bold',
}));
