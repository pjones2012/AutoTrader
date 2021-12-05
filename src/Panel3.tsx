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

interface Panel3Props {
  children?: React.ReactNode;
  current: string;
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
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const Panel3 = (props: Panel3Props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `${props.current}`,
      },
    },
  };

  const [data, setData] = React.useState( {
    labels: [] ,
    datasets: [
      {
        label: 'Dataset 1',//Add coin information here
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  });

  React.useEffect(()=>{
    var rightNow = Math.floor(Date.now()/1000);
    //console.log('end =', rightNow); // 1638649032.056
                                        //1638576000
                                        //25833600
    /*Promise.allSettled([axios(`https://api.exchange.coinbase.com/products/${props.current}-USD/candles`, {
      params: {
        granularity: 86400,
        start: rightNow - 31536000,
        end: rightNow,
      }
    }),*/
    axios(`https://api.exchange.coinbase.com/products/${props.current}-USD/candles`, {
      params: {
        granularity: 86400,
        start: null, //rightNow - 25833600, //299 days
        end: null,
      }
    })//])
    .then((res)=>{
      //console.log(res);
      setData({
        labels: res.data.reverse().map((item: number[])=>{
          var d = new Date(0);
          d.setUTCSeconds(item[0]);
          return months[d.getMonth()]+ d.getDate() + ', ' + d.getFullYear();
        }) ,
        datasets: [
        {
          label: `${props.current} closing price`,
          data: res.data.reverse().map((item: number[])=>{return item[4];}),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ]});
    }).catch((err)=>{
      console.log(err);
    });


  }, [1])
  return (
    <React.Fragment>
      <div>Detail about current stock being looked at eg: price, market cap , change % and price chart. There should be a Buy/Sell button that will take you to coinbase or some other trader.There should be a Add to watchList button.</div>
      <Line options={options} data={data}></Line>
    </React.Fragment>
    );
}