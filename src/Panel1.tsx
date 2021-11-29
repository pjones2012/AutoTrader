import React from 'react';
import axios from 'axios';
import { Card, Grid, Button } from '@mui/material';

export const Panel1 = (props) => {
  const [cryptoList, setCryptoList] = React.useState(["BTC"]);

  const handleCardClick = (crypto, event) => {
    event.preventDefault();
    console.log('Go to Panel three and look at ' + crypto);
  };

  const handleAdd = (newValue, event) => {
    event.preventDefault();
    var newList = props.watchList.slice();
    newList.push(newValue);
    props.setWatchList(newList);
  };
  React.useEffect(()=>{
    axios('https://api.coinbase.com/v2/currencies')
    .then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    });
    setCryptoList(["BTC", "ETH", "ETH2"]);
  }, [1])
  return (
  <React.Fragment >
    <div> A page exploring cryptos. And there should be a button to add this to the watchlist</div>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        {cryptoList.map((item, i)=>{
            return (<Card key={i} onClick={(e)=>handleCardClick(item,e)}>Information about {item} eg: price, market cap , change % and price chart
            <Button color="inherit" onClick={(e)=>handleAdd(item,e)}>Add to WatchList</Button>
            </Card>)
          })}
      </Grid>
    </Grid>
  </React.Fragment>);
}