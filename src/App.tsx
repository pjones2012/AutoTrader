import React from 'react';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { PreSignIn } from './PreSignIn';
import { PostSignIn } from './PostSignIn';

export const App = () => {
  const [signedIn, LogIn] = React.useState(false);
  const [myName, setMyName] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [watchList, setWatchList] = React.useState(["BTC"]);
  const handleOpen = () => setOpen(true);
  const handleClose = ( username: string) => {
    console.log('is this you?',username);
    if(username !== ''){
      axios(`http://localhost:3000/Login`, { params: { name: username } })
      .then((res)=>{
        console.log(res);
        LogIn(!signedIn);
        setMyName(username);
        var list = res.data.rows[0].watchlist===null?[]:res.data.rows[0].watchlist.split(',');
        setWatchList(list);
      }).catch((err)=>{
        console.log(err);
      });
    }

    setOpen(false);
  }

  const handleLogIn = (event: React.SyntheticEvent) => {
    event.preventDefault();
    LogIn(!signedIn);
  };
  return (
  <React.Fragment >
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" component="h1"  sx={{ flexGrow: 1 }}>
          Not So AutoTrader
        </Typography>
        <Button color="inherit" onClick={signedIn?handleLogIn:handleOpen}>{signedIn?"Log off":"Log In"}</Button>
      </Toolbar>
    </AppBar>
    {!signedIn && <PreSignIn modalState={open} handleClose={handleClose}/>}
    {signedIn && <PostSignIn myName={myName} watchList={watchList} setWatchList={setWatchList}/>}
  </React.Fragment> );
}