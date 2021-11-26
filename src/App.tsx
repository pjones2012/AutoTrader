import React from 'react';
import { AppBar, Toolbar, Typography, Button, formLabelClasses } from '@mui/material';
import { PreSignIn } from './PreSignIn';
import { PostSignIn } from './PostSignIn';

//import { TabPanel } from '@mui/lab';

export const App = () => {
  const [signedIn, LogIn] = React.useState(false);
  const handleLogIn = (event) => {
    event.preventDefault();
    LogIn(!signedIn);
  };
  return (
  <React.Fragment >
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" component="h1"  sx={{ flexGrow: 1 }}>
          Not So Auto Trader
        </Typography>
        <Button color="inherit" onClick = {handleLogIn}>Login</Button>
      </Toolbar>
    </AppBar>
    {!signedIn && <PreSignIn />}
    {signedIn && <PostSignIn />}
  </React.Fragment> );
}