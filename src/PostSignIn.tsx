import React from 'react';
import axios from 'axios';
import { Box, Tabs, Tab } from '@mui/material';
import { Panel1 }  from './Panel1';
import { Panel2 } from './Panel2';
import { Panel3 } from './Panel3';

export const PostSignIn = (props) => {
  const [cryptoList, setCryptoList] = React.useState([{base_currency: "BTC"}]);
  const [cryptoDetail, setCryptoDetail] = React.useState("BTC");
  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  React.useEffect(()=>{
    axios(`https://api.exchange.coinbase.com/products`)
    .then((res)=>{
      //console.log(res.data);
      setCryptoList(res.data);
    }).catch((err)=>{
      console.log(err);
    });


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
      {value === 0 && <Panel1 myName={props.myName} cryptoList={cryptoList} watchList={props.watchList} setWatchList={props.setWatchList} changePanel={setValue} changeCryptoDetail={setCryptoDetail}/>}
      {value === 1 && <Panel2 myName={props.myName} watchList={props.watchList} setWatchList={props.setWatchList}/>}
      {value === 2 && <Panel3 current={cryptoDetail} />}
    </React.Fragment>
  );
}