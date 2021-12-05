import React from 'react';
import axios from 'axios';
import { Card, Grid, Button, Typography} from '@mui/material';

interface Panel1Props {
  children?: React.ReactNode;
  cryptoList: {base_currency: string}[];
  watchList: string[];
  setWatchList: any;
  changePanel: any;
  myName: string;
  changeCryptoDetail: any;
}

export const Panel1 = (props: Panel1Props ) => {
  const [cryptoPriceList, setCryptoPriceList] = React.useState([{status:"BTC", value: {data: {data: {amount: 0}}}}]);
  const [cryptoOpeningList, setCryptoOpeningList] = React.useState([{status:"BTC", value: {data: {open: 0}}}]);
  const [index, setIndex] = React.useState(0);

  const handleCardClick = (crypto: string, event: React.SyntheticEvent) => {
    event.preventDefault();
    props.changePanel(2);
    props.changeCryptoDetail(crypto);
  };

  const handleNextPage = ()=>{
    if(index+15<props.cryptoList.length){
      setIndex(index+15);
    }
  };

  const handlePrevPage = ()=>{
    if(index-15>=0){
      setIndex(index-15);
    }
  };

  const handleAdd = (newValue: string, event: React.SyntheticEvent) => {
    event.preventDefault();
    var newList = props.watchList.slice();
    newList.push(newValue);
    axios.post(`http://localhost:3000/watchItem`, { list: newList.join(','), name: props.myName })
    .then((res)=>{
      props.setWatchList(newList);
    }).catch((err)=>{
      console.log(err);
    });
  };
  React.useEffect(() => {
    Promise.allSettled(props.cryptoList.slice(index,index+15).map((item )=>axios(`https://api.coinbase.com/v2/prices/${item.base_currency}-USD/spot`)))
    .then((res)=>{
      var list: any[] = [];
      res.forEach((item)=>{
        list.push(item);
      })
      setCryptoPriceList(list);
    }).catch((err)=>{
      console.log('help', err);
    });
    return;
  }, [props.cryptoList])

  React.useEffect(() => {
    Promise.allSettled(props.cryptoList.slice(index,index+15).map((item )=>axios(`https://api.exchange.coinbase.com/products/${item.base_currency}-USD/stats
`)))
    .then((res)=>{
      //console.log('open', res);
      var openList: any[] = [];
      res.forEach((item)=>{
        openList.push(item);
      })
      setCryptoOpeningList(openList);
    }).catch((err)=>{
      console.log('help', err);
    });
    return;
  }, [props.cryptoList])

  return (
  <React.Fragment >
    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        {props.cryptoList.slice(index,index+15||props.cryptoList.length).map((item, i)=>{
            return (
            <Card key={i} >
              <span onClick={(e)=>handleCardClick(item.base_currency,e)}>
                Ticker: {item.base_currency} <br></br>
                Price: {(cryptoPriceList[i]||cryptoPriceList[0]).status === "fulfilled"? (cryptoPriceList[i]||cryptoPriceList[0]).value.data.data.amount:null} <br></br>
                Change %: {(cryptoOpeningList[i]||cryptoOpeningList[0]).status === "fulfilled"? ((cryptoPriceList[i]||cryptoPriceList[0]).value.data.data.amount/(cryptoOpeningList[i]||cryptoOpeningList[0]).value.data.open -1).toFixed(2):null}

              </span>
              <Button color="inherit" onClick={(e)=>handleAdd(item.base_currency,e)}>Add to WatchList</Button>


            </Card>)
          })}
      </Grid>
      <Button color="inherit" onClick={handlePrevPage}>Prev</Button>
      <Button color="inherit" onClick={handleNextPage}>Next</Button>
    </Grid>
  </React.Fragment>);
}