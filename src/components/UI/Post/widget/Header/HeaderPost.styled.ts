import { Stack, styled } from '@mui/material';

export const PostHeader = styled('div')(() => ({
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '18px',
  marginBottom: '11px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
export const PostHeaderInfo = styled(Stack)(() => ({}));
export const PostHeaderAction = styled('div')(() => ({}));
