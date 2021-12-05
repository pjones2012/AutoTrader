import React from 'react';
import axios from 'axios';
import { Modal, Box, Typography, Button, InputLabel, Input } from '@mui/material';
import { spacing } from '@mui/system';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
interface PreSignInProps {
  children?: React.ReactNode;
  modalState: boolean;
  handleClose: any;
  login: any;
  setMyName: any;
  setWatchList: any;
}
export const PreSignIn = (props: PreSignInProps) => {
  const handleSubmit = ( username: string) => {
    if(username !== ''){
      axios(`/Login`, { params: { name: username } })
      .then((res)=>{
        console.log(res);
        if (res.data.rows.length > 0) {
          props.login(true);
          props.setMyName(username);
          var list = res.data.rows[0].watchlist===null?[]:res.data.rows[0].watchlist.split(',');
          props.setWatchList(list);
          props.handleClose();
        } else {
          throw 'Cannot Find User';
        }

      }).catch((err)=>{
        console.log(err);
      });
    }
  }
  const handleSignUp = ( username: string) => {
    //console.log('is this you?',username);
    if(username !== ''){
      axios.post(`/SignUp`,  { name: username })
      .then((res)=>{
        console.log(res);
          props.handleClose();
      }).catch((err)=>{
        console.log(err);
      });
    }
  }
  return (
  <div style={{margin:"30px"}} align="center" >
    <div > <img src="../server/Opener.jpeg" alt="Cryptocurrency Image"  width="50%" height="25%" ></img></div>
    <h3 >Sign in to explore the Crypto World!</h3>
    <Modal
        open={props.modalState}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Log In!
          </Typography>
          <InputLabel htmlFor="username" sx={{ mt: 2 }}>Name</InputLabel>
          <Input id="username"   sx={{ mt: 2 }} />
          <Button onClick={()=>handleSubmit( document.getElementById("username").value)}>Log In</Button>
          <Button onClick={()=>handleSignUp( document.getElementById("username").value)}>Sign Up</Button>
        </Box>
      </Modal>
  </div>
  );
}