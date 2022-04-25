import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router-dom';

const UserPageTabs = () => {
  const [value, setValue] = useState('one');

  const navigate = useNavigate();
  const location = useLocation();
  const toNavigate = (event: React.SyntheticEvent, link: string) => {
    return () => {
      navigate(link);
    };
  };

  return (
    <Box sx={{ width: '100%', mt: '20px' }}>
      <Tabs
        value={value}
        onChange={toNavigate}
        textColor='secondary'
        indicatorColor='secondary'
        aria-label='secondary tabs example'
      >
        <Tab value='/entries' label='Статьи' />
        <Tab value='/comments' label='Комментарии' />
        <Tab value='/details' label='Подробнее' />
      </Tabs>
    </Box>
  );
};
export default UserPageTabs;
