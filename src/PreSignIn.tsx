import React from 'react';
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
}
export const PreSignIn = (props: PreSignInProps) => {

  return (
  <div style={{margin:"30px"}} align="center" >
    <div > <img src="./Opener.jpeg" alt="Cryptocurrency Image"  width="50%" height="25%" ></img></div>
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
          <Button onClick={()=>props.handleClose( document.getElementById("username").value)}>Close</Button>
        </Box>
      </Modal>
  </div>
  );
}