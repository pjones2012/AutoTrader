import React from 'react';
import axios from 'axios';
import { Card, Grid, Button } from '@mui/material';

interface Panel1Props {
  children?: React.ReactNode;
  cryptoList: string[];
  watchList: string[];
  setWatchList: any;
  changePanel: any;
}

export const Panel1 = (props: Panel1Props ) => {
  const [cryptoInfoList, setCryptoInfoList] = React.useState([{status:"BTC"}]);
  const handleCardClick = (crypto: string, event: React.SyntheticEvent) => {
    event.preventDefault();
    props.changePanel(2);
    console.log('look at ' + crypto);
  };

  const handleAdd = (newValue: number, event: React.SyntheticEvent) => {
    event.preventDefault();
    var newList = props.watchList.slice();
    newList.push(newValue);
    props.setWatchList(newList);
  };
  React.useEffect(()=>{
    Promise.allSettled(props.cryptoList.map((item )=>axios(`https://api.exchange.coinbase.com/products/${item.base_currency_symbol}-USD/stats`)))
    .then((res)=>{
      console.log(res);
      var list: any[] = [];
      res.forEach((item)=>{
        list.push(item);
      })
      setCryptoInfoList(list);
    }).catch((err)=>{
      console.log('help', err);
    });
  }, [1])
  return (
  <React.Fragment >
    <div> A page exploring cryptos. And there should be a button to add this to the watchlist</div>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        {cryptoInfoList.map((item, i)=>{
            return (
            <Card key={i} >
              <span onClick={(e)=>handleCardClick(props.cryptoList[i].base_currency_symbol,e)}> {props.cryptoList[i].base_currency_name} {props.cryptoList[i].base_currency_symbol} {item.status === "fulfilled"?item.value.data.last + " " + (item.value.data.last/item.value.data.open - 1).toFixed(2): null}, price chart market cap ,</span>
              <Button color="inherit" onClick={(e)=>handleAdd(props.cryptoList[i].base_currency_symbol,e)}>Add to WatchList</Button>
            </Card>)
          })}
      </Grid>
    </Grid>
  </React.Fragment>);
}