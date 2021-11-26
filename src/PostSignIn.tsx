import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { Panel1 }  from './Panel1';
import { Panel2 } from './Panel2';

export const PostSignIn = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <React.Fragment >
      <div style = {{margin:"1% 0 1% 0"}} >
        <div align="center" style={{overflow:"hidden", height:"20vh"}}>
          <img src="./Opener.jpeg" alt="Cryptocurrency Image" width="80%" style = {{margin:"-45% 0 -35% 0"}} ></img>
        </div>
      </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth">
          <Tab label="Explore Crypto" />
          <Tab label="Your WatchList"  />
        </Tabs>
      </Box>
      {value === 0 && <Panel1 />}
      {value === 1 && <Panel2 />}
    </React.Fragment>
  );
}