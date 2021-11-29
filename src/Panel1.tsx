import React from 'react';
import axios from 'axios';
import { Card, Grid } from '@mui/material';

export const Panel1 = () => {
  const [storyList, setList] = React.useState([]);

  //const handleChange = (event, newValue) => {
    //event.preventDefault();
    //setValue(newValue);
  //};
  React.useEffect(()=>{
    axios('https://api.coinbase.com/v2/currencies')
    .then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    });
    setList(["Hello", 123]);
  }, [1])
  return (
  <React.Fragment >
    <div> This should be a page about the hottest crypto today. It will require some ML maybe and some work to make predictions and be smart.  Then separately this should be a page about searching and exploring more crypto. There should be a Buy/Sell button that will take you to coinbase or some other trader. And there should be a button to add this to the watchlist</div>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Card>Searching!! and Exporations</Card>
      </Grid>
      <Grid item xs={6}>
        <Card>Most increase in 24H & {storyList}</Card>
        <Card>Most increase in 1W</Card>
        <Card>Newest</Card>
        <Card>Announcements</Card>
        <Card>Buy Low! </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>Detail about current stock being looked at eg: price, market cap , change % and price chart </Card>
      </Grid>
    </Grid>
  </React.Fragment>);
}