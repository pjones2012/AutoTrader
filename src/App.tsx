import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { Panel1 }  from './Panel1';
import { Panel2 } from './Panel2';
//import { TabPanel } from '@mui/lab';

export const App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    //event.preventDefault();
    setValue(newValue);
  };

  return (
  <React.Fragment >
    <h1>Not So Auto Trader</h1>
    <div> need sign in since I have account information on the watch list. </div>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Explore Crypto" />
        <Tab label="Your WatchList"  />
      </Tabs>
    </Box>
    {value === 0 && <Panel1 />}
    {value === 1 && <Panel2 />}
  </React.Fragment> );
}