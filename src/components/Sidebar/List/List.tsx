import React, { FC } from 'react';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Lists from './config.json';
import { getIcon } from '../../../helpers/getIcon';
import theme from '../../../theme';

interface SidebarListProps {
  handleToggleMenu?: () => void;
}

const SidebarList: FC<SidebarListProps> = ({ handleToggleMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const toNavigate = (link: string) => {
    return () => {
      navigate(link);
      if (handleToggleMenu) {
        handleToggleMenu();
      }
    };
  };
  return (
    <List
      sx={{
        width: {
          xs: '100%',
          md: '80%',
        },
      }}
      disablePadding={false}
    >
      {Lists.map((list) => (
        <ListItemButton
          sx={{
            mb: '15px',
          }}
          key={`${list.name}`}
          onClick={toNavigate(list.route)}
          selected={list.route === location.pathname}
        >
          <ListItemIcon
            sx={
              list.route === location.pathname
                ? { color: theme.palette.secondary.main }
                : undefined
            }
          >
            {getIcon(list.icon)}
          </ListItemIcon>
          <ListItemText primary={list.name} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default SidebarList;
