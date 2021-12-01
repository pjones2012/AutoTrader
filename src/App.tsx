import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { PreSignIn } from './PreSignIn';
import { PostSignIn } from './PostSignIn';

//import { TabPanel } from '@mui/lab';

export const App = () => {
  const [signedIn, LogIn] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    axios(`http://localhost:3000/Login`)
    .then((res)=>{
      console.log(res.data);
      setCryptoList(res.data.results);
    }).catch((err)=>{
      console.log(err);
    });
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
    {!signedIn && <PreSignIn modalstate={open} handleClose={handleClose}/>}
    {signedIn && <PostSignIn />}
  </React.Fragment> );
}