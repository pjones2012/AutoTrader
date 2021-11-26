import React from 'react';
import { Card, Grid } from '@mui/material';

export const Panel2 = () => {
  //const [value, setValue] = React.useState(0);

  //const handleChange = (event, newValue) => {
    //event.preventDefault();
    //setValue(newValue);
  //};

  return (
    <React.Fragment>
      <div> This should be a page The currencies that are on the account holders watch list. There should be a button to remove from the watch list</div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card>Card for each watch list item</Card>

        </Grid>
        <Grid item xs={6}>
          <Card>Updated on the selected card.</Card>
        </Grid>

      </Grid>
    </React.Fragment>);
}