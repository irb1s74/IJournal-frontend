import React from 'react';
import SidebarListItemIcon from './ListItemIcon';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Lists from './config.json';

const SidebarList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const toNavigate = (link: string) => {
    return () => {
      navigate(link);
    };
  };
  return (
    <List sx={{ width: '80%' }} disablePadding={false}>
      {Lists.map((list) => (
        <ListItemButton
          key={`${list.name}`}
          onClick={toNavigate(list.route)}
          selected={list.route === location.pathname}
        >
          <ListItemIcon
            sx={
              list.route === location.pathname
                ? { color: '#DA4A5E' }
                : undefined
            }
          >
            <SidebarListItemIcon icon={list.icon} />
          </ListItemIcon>
          <ListItemText primary={list.name} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default SidebarList;
