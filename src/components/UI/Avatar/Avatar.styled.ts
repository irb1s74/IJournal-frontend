import { Avatar, styled } from '@mui/material';

export const CustomAvatar = styled(Avatar)<{ size: string }>(
  ``,
  ({ theme, size }) => ({
    backgroundColor: theme.palette.secondary.main,
    width: `${size}px`,
    height: `${size}px`,
  })
);
