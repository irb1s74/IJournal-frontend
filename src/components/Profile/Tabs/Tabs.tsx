import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const ProfileTabs = () => {
  const [value, setValue] = useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: '20px' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor='secondary'
        indicatorColor='secondary'
        aria-label='secondary tabs example'
      >
        <Tab value='one' label='Статьи' />
        <Tab value='two' label='Комментарии' />
        <Tab value='three' label='Подробнее' />
      </Tabs>
    </Box>
  );
};
export default ProfileTabs;
