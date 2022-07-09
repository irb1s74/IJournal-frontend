import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ProfileTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const toNavigate = (event: React.SyntheticEvent, link: string) => {
    navigate(link);
  };

  return (
    <Box sx={{ width: '100%', mt: '20px' }}>
      <Tabs
        value={location.pathname}
        onChange={toNavigate}
        textColor='secondary'
        indicatorColor='secondary'
        aria-label='secondary tabs example'
      >
        <Tab value={`/user/${id}`} label='Статьи' />
        <Tab value={`/user/${id}/details`} label='Подробнее' />
      </Tabs>
    </Box>
  );
};
export default ProfileTabs;
