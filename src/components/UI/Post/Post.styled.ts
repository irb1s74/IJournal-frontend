import { IconButton, Stack, styled } from '@mui/material';

export const WrapperPost = styled('div')(({ theme }) => ({
  backgroundColor: '#FFF',
  maxWidth: '640px',
  width: '100%',
  borderRadius: '8px',
}));

export const PostHeader = styled('div')(({ theme }) => ({
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '18px',
  marginBottom: '11px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
export const PostHeaderInfo = styled(Stack)(({ theme }) => ({}));
export const PostHeaderAction = styled('div')(({ theme }) => ({}));

export const PostContent = styled('div')(({ theme }) => ({
  paddingLeft: '20px',
  paddingRight: '20px',
}));

export const PostFooter = styled('div')(({ theme }) => ({
  paddingLeft: '20px',
  paddingRight: '16px',
  paddingBottom: '18px',
  marginTop: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const PostFooterAction = styled(Stack)(({ theme }) => ({}));
export const PostFooterVote = styled(Stack)(({ theme }) => ({}));

export const PostBoxAction = styled(IconButton)(
  `&:hover {
    color: #DA4A5E
  }`,
  ({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  })
);

export const ItemWrapper = styled('div')(({ theme }) => ({
  paddingLeft: '20px',
  paddingRight: '20px',
}));