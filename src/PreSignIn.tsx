import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
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

export const PreSignIn = (props) => {

  return (
  <div style={{margin:"30px"}} align="center" >
    <div > <img src="./Opener.jpeg" alt="Cryptocurrency Image"  width="50%" height="25%" ></img></div>
    <h3 >Sign in to explore the Crypto World!</h3>
    <Modal
        open={props.modalstate}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Log In!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form>
              <label htmlFor="username">Name:</label>
              <input type='text' id="username"></input>
              <Button onClick={props.handleClose}>Close</Button>
            </form>
          </Typography>
        </Box>
      </Modal>
  </div>
  );
}