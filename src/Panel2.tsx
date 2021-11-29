import React from 'react';
import axios from 'axios';
import { Card, Grid, Button } from '@mui/material';

export const Panel2 = () => {
  const [watchList, setWatchList] = React.useState(["BTC"]);
  const [selected, setSelected] = React.useState(0);

  const handleCardClick = (newValue, event) => {
    event.preventDefault();
    setSelected(newValue);
  };
  const handleRemove = (removeValue, event) => {
    event.preventDefault();
    var newList = watchList.slice();
    newList.splice(removeValue,1);
    setWatchList(newList);
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

  React.useEffect(()=>{
    axios(`https://api.exchange.coinbase.com/products/${watchList[selected]}-USD/stats`)
    .then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    });
  }, [selected])

  return (
    <React.Fragment>
      <div> This should be a page The currencies that are on the account holders watch list. There should be a button to remove from the watch list</div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <h3 align="center" >Watch List</h3>
          {watchList.map((item, i)=>{
            return (<Card key={i} onClick={(e)=>handleCardClick(i,e)}>{item}</Card>)
          })}

        </Grid>
        <Grid item xs={6}>
        <h3 align="center">Recent Updates</h3>
          <Card>Updated information about {watchList[selected]}
            <Button color="inherit" onClick={(e)=>handleRemove(selected,e)}>Remove</Button>
          </Card>
        </Grid>

      </Grid>
    </React.Fragment>);
}