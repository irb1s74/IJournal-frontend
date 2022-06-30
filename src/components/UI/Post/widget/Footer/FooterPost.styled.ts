import { CardActions, IconButton, Stack, styled } from '@mui/material';

export const PostFooter = styled(CardActions)(() => ({
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
