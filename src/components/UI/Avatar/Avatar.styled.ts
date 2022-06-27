import { Avatar, styled } from '@mui/material';

export const CustomAvatar = styled(Avatar)<{ profile: boolean }>(
  ``,
  ({ theme, profile }) => ({
    backgroundColor: theme.palette.secondary.main,
    width: profile ? '80px' : undefined,
    height: profile ? '80px' : undefined,
  })
);
