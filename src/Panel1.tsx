import React from 'react';
import axios from 'axios';
import { Card, Grid, Button } from '@mui/material';

interface Panel1Props {
  children?: React.ReactNode;
  cryptoList: string[];
  watchList: string[];
  setWatchList: any;
  changePanel: any;
  myName: string;
  changeCryptoDetail: any;
}

export const Panel1 = (props: Panel1Props ) => {
  const [cryptoPriceList, setCryptoPriceList] = React.useState([{status:"BTC", value: 0}]);
  const [index, setIndex] = React.useState(0);

  const handleCardClick = (crypto: string, event: React.SyntheticEvent) => {
    event.preventDefault();
    props.changePanel(2);
    props.changeCryptoDetail(crypto);
    console.log('look at ' + crypto);
  };
  const handleNextPage = ()=>{
    if(index+25<props.cryptoList.length){
      setIndex(index+25);
    }

  };
  const handlePrevPage = ()=>{
    if(index-25>=0){
      setIndex(index-25);
    }

  };

  const handleAdd = (newValue: number, event: React.SyntheticEvent) => {
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
  React.useEffect(()=>{
    Promise.allSettled(props.cryptoList.slice(index,index+25).map((item )=>axios(`https://api.coinbase.com/v2/prices/${item.base_currency}-USD/spot`)))
    .then((res)=>{
      console.log('wtheck man', res);
      var list: any[] = [];
      res.forEach((item)=>{
        list.push(item);
      })
      setCryptoPriceList(list);
    }).catch((err)=>{
      console.log('help', err);
    });
  }, [props.cryptoList])
  return (
  <React.Fragment >
    <div> A page exploring cryptos. </div>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        {props.cryptoList.slice(index,index+25||props.cryptoList.length).map((item, i)=>{
            return (
            <Card key={i} >
              <span onClick={(e)=>handleCardClick(item.base_currency,e)}> {/*props.cryptoList[i].base_currency_name*/} {item.base_currency} {(cryptoPriceList[i]||cryptoPriceList[0]).status === "fulfilled"? (cryptoPriceList[i]||cryptoPriceList[0]).value.data.data.amount:null}, price change price chart market cap ,</span>
              <Button color="inherit" onClick={(e)=>handleAdd(item.base_currency,e)}>Add to WatchList</Button>


            </Card>)
          })}
      </Grid>
      <Button color="inherit" onClick={(e)=>handlePrevPage(e)}>Prev</Button>
      <Button color="inherit" onClick={(e)=>handleNextPage(e)}>Next</Button>
    </Grid>
  </React.Fragment>);
}