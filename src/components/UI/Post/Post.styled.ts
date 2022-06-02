import { IconButton, Stack, styled } from '@mui/material';

export const WrapperPost = styled('div')(() => ({
  backgroundColor: '#FFF',
  maxWidth: '640px',
  width: '100%',
  borderRadius: '8px',
}));

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

export const PostContent = styled('div')(() => ({
  paddingLeft: '20px',
  paddingRight: '20px',
}));

export const PostFooter = styled('div')(() => ({
  paddingLeft: '20px',
  paddingRight: '16px',
  paddingBottom: '18px',
  marginTop: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const PostFooterAction = styled(Stack)(() => ({}));
export const PostFooterVote = styled(Stack)(() => ({}));

export const PostBoxAction = styled(IconButton)(
  `&:hover {
    color: #DA4A5E
  }`,
  () => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  })
);

export const ItemWrapper = styled('div')(() => ({
  paddingLeft: '20px',
  paddingRight: '20px',
}));
