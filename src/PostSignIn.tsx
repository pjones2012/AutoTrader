import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { Panel1 }  from './Panel1';
import { Panel2 } from './Panel2';
import { Panel3 } from './Panel3';

export const PostSignIn = () => {
  const [watchList, setWatchList] = React.useState(["BTC"]);
  const [value, setValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };
  React.useEffect(()=>{
    //axios('https://api.coinbase.com/v2/currencies')
    //.then((res)=>{
      //console.log(res.data);
    //}).catch((err)=>{
      //console.log(err);
    //});

    setWatchList(["BTC", "ETH", "ETH2"]);
  }, [1])
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
          <Tab label="Investigate" />
        </Tabs>
      </Box>
      {value === 0 && <Panel1 watchList={watchList} setWatchList={setWatchList}/>}
      {value === 1 && <Panel2 watchList={watchList} setWatchList={setWatchList}/>}
      {value === 2 && <Panel3 />}
    </React.Fragment>
  );
}