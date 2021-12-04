import React from 'react';
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,} from 'chart.js';
import { Line }  from 'react-chartjs-2';
import axios from 'axios';
import { Card, Grid, Button } from '@mui/material';

interface Panel3Props {
  children?: React.ReactNode;
  cryptoDetail: string;
}
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Panel3 = (props: Panel3Props) => {

  React.useEffect(()=>{
    //axios(`https://api.polygon.io/v3/reference/tickers?market=crypto&active=true&sort=ticker&order=asc&limit=10&apiKey=nItHIw3cXQwOIt0aaLx6VFa1S0pluHQU`)
    //.then((res)=>{
      //console.log(res.data);
      //setCryptoList(res.data.results);
    //}).catch((err)=>{
      //console.log(err);
    //});


  }, [1])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart', //Add coinName here
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; //labels might need to be dynamic based on how long coin has been out or time frame

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',//Add coin information here
        data: [1,2,3,4,5,6,7,8,9,10],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      //{
        //label: 'Dataset 2',
        //data: labels.map(() => datatype.number({ min: -1000, max: 1000 })),
        //borderColor: 'rgb(53, 162, 235)',
        //backgroundColor: 'rgba(53, 162, 235, 0.5)',
      //},
    ],
  };
  return (
    <React.Fragment>
      <div>Detail about current stock being looked at eg: price, market cap , change % and price chart. There should be a Buy/Sell button that will take you to coinbase or some other trader.There should be a Add to watchList button.</div>
      <Line options={options} data={data}></Line>
    </React.Fragment>
    );
}