import React from 'react';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { PreSignIn } from './PreSignIn';
import { PostSignIn } from './PostSignIn';

export const App = () => {
  const [signedIn, LogIn] = React.useState(true);
  const [myName, setMyName] = React.useState('Portia');
  const [open, setOpen] = React.useState(false);
  const [watchList, setWatchList] = React.useState(["BTC"]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogIn = (event: React.SyntheticEvent) => {
    event.preventDefault();
    LogIn(!signedIn);
  };
  return (
  <React.Fragment >
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" component="h1"  sx={{ flexGrow: 1 }}>
          CryptoClass
        </Typography>
        <Button color="inherit" onClick={signedIn?handleLogIn:handleOpen}>{signedIn?"Log off":"Log In"}</Button>
      </Toolbar>
    </AppBar>
    {!signedIn && <PreSignIn setMyName={setMyName} modalState={open} login={LogIn} handleClose={handleClose} setWatchList={setWatchList}/>}
    {signedIn && <PostSignIn myName={myName} watchList={watchList} setWatchList={setWatchList}/>}
  </React.Fragment> );
}