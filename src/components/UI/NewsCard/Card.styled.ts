import { IconButton, Stack, styled } from '@mui/material';

export const WrapperCard = styled('div')(({ theme }) => ({
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

export const CardContent = styled('div')(({ theme }) => ({
  paddingLeft: '20px',
  paddingRight: '20px',
}));

export const CardFooter = styled('div')(({ theme }) => ({
  paddingLeft: '20px',
  paddingRight: '16px',
  paddingBottom: '18px',
  marginTop: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const CardFooterAction = styled(Stack)(({ theme }) => ({}));
export const CardFooterVote = styled(Stack)(({ theme }) => ({}));

export const CardBoxAction = styled(IconButton)(
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
