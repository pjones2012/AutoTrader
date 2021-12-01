import React from 'react';
import axios from 'axios';
import { Card, Grid, Button } from '@mui/material';

interface Panel2Props {
  children?: React.ReactNode;
  watchList: string[];
  setWatchList: any;
}
export const Panel2 = (props: Panel2Props) => {
  const [selected, setSelected] = React.useState(0);
  const [storyList, setList] = React.useState([]);
  const handleCardClick = (newValue: number, event: React.SyntheticEvent) => {
    event.preventDefault();
    setSelected(newValue);
  };
  const handleRemove = (removeValue: number, event: React.SyntheticEvent) => {
    event.preventDefault();
    var newList = props.watchList.slice();
    newList.splice(removeValue,1);
    props.setWatchList(newList);
  };
  React.useEffect(()=>{
    //axios('https://api.coinbase.com/v2/currencies')
    //.then((res)=>{
      //console.log(res.data);
    //}).catch((err)=>{
      //console.log(err);
    //});


  }, [1])

  React.useEffect(()=>{
    axios(`https://api.exchange.coinbase.com/products/${props.watchList[selected]}-USD/stats`)
    .then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    });
  }, [selected])

  return (
    <React.Fragment>
      <div> This should be a page about The currencies that are on the account holders watch list. There should be a button to remove from the watch list with updates from the last visit</div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <h3 align="center" >Watch List</h3>
          {props.watchList.map((item, i)=>{
            return (<Card key={i} onClick={(e)=>handleCardClick(i,e)}>{item}</Card>)
          })}
        </Grid>
        <Grid item xs={6}>
        <h3 align="center">Recent Updates</h3>
          <Card>Updated information about {props.watchList[selected]}
            <Button color="inherit" onClick={(e)=>handleRemove(selected,e)}>Remove</Button>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>Most increase in 24H </Card>
          <Card>Most increase in 1W</Card>
          <Card>Newest</Card>
          <Card>Announcements</Card>
          <Card>Buy Low! </Card>
        </Grid>
      </Grid>
    </React.Fragment>);
}