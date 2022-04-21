import { Avatar, Stack, styled } from '@mui/material';

export const PageWrapper = styled('div')(() => ({
  height: '100%',
  flexGrow: '1',
  paddingTop: '15px',
}));

export const ProfileHeader = styled('div')(() => ({
  maxWidth: '960px',
  width: '100%',
  position: 'relative',
  backgroundColor: '#fff',
  borderRadius: '12px',
}));

export const Banner = styled('div')(() => ({
  width: '100%',
  borderRadius: '12px',
  height: '260px',
  backgroundColor: '#29253C',
  // overflow: 'hidden',
}));

export const Info = styled(Stack)(() => ({
  padding: '15px',
  paddingBottom: '0',
}));
export const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  zIndex: '4',
  width: '80px',
  height: '80px',
  position: 'absolute',
  right: 'calc(50% - 80px)',
  transform: 'translate(-50%, -70%)',
  backgroundColor: theme.palette.secondary.main,
}));
