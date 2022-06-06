import { Avatar, styled } from '@mui/material';

export const CustomAvatar = styled(Avatar)<{ profileRender?: boolean }>(
  ``,
  ({ theme, profileRender }) => ({
    backgroundColor: theme.palette.secondary.main,
    width: profileRender ? '80px' : undefined,
    height: profileRender ? '80px' : undefined,
  })
);
