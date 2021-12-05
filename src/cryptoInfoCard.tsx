import { Card, Button} from '@mui/material';

interface CryptoInfoCardProps {
  children?: React.ReactNode;
  currency: string;
  handleCardClick: any;
  handleButton: any;
  buttonName: string;
  price: number;
  open: number;
}

export const CryptoInfoCard = (props: CryptoInfoCardProps)=>{
  return (
    <Card  >
      <span onClick={(e)=>props.handleCardClick(props.currency,e)}>
        Ticker: {props.currency} <br></br>
        Price: {props.price} <br></br>
        Change %: { props.open===0?"--":(props.price/props.open-1).toFixed(2)}
      </span>
      <Button color="inherit" onClick={(e)=>props.handleButton(props.currency,e)}>{props.buttonName}</Button>
    </Card>
);
}