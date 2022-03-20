import { Stack, styled } from '@mui/material';

export const Card = styled('div')(({ theme }) => ({
  marginBottom: '28px',
  backgroundColor: '#FFF',
  maxWidth: '640px',
  width: '100%',
  borderRadius: '8px',
}));

export const CardHeader = styled('div')(({ theme }) => ({
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '18px',
  marginBottom: '11px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
export const CardHeaderInfo = styled(Stack)(({ theme }) => ({}));
export const CardHeaderAction = styled('div')(({ theme }) => ({}));
