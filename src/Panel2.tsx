import React from 'react';
import axios from 'axios';
import { CryptoInfoCard }from './cryptoInfoCard';
import { Card, Grid, Button } from '@mui/material';

interface Panel2Props {
  children?: React.ReactNode;
  watchList: string[];
  setWatchList: any;
  myName: string;
}
export const Panel2 = (props: Panel2Props) => {
  const [selected, setSelected] = React.useState(0);
  const [storyList, setList] = React.useState([]);
  const handleCardClick = (newValue: number, event: React.SyntheticEvent) => {
    event.preventDefault();
    setSelected(newValue);
  };
  const handleRemove = (removeValue: number, event: React.SyntheticEvent) => {
    var newList = props.watchList.slice();
    newList.splice(removeValue,1);

    axios.post(`/watchItem`, { list: newList.join(','), name: props.myName })
    .then((res)=>{
      props.setWatchList(newList);
    }).catch((err)=>{
      console.log(err);
    });
  };

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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <h3 align="center" >Watch List</h3>
          {props.watchList.map((item, i)=>{
            return (<Card key={i} onClick={(e)=>handleCardClick(i,e)}>{item}</Card>)
          })}
        </Grid>
        <Grid item xs={6}>
        <h3 align="center">Recent Updates</h3>
        <CryptoInfoCard
                currency={props.watchList[selected]}
                handleButton={(e)=>handleRemove(selected,e)}
                buttonName="Remove"
                price={0}
                open={0}
                />
        </Grid>
        <Grid item xs={12}>
          <Card>Biggest Winner </Card>
          <Card>New</Card>
          <Card>Hot</Card>
          <Card>Biggest Loser </Card>
        </Grid>
      </Grid>
    </React.Fragment>);
}