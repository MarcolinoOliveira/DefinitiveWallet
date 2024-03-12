'use client'

import { Grid, Typography } from "@mui/material";

const Header = () => {
  return (
    <Grid container direction='row' width='100%' py={2}>
      <Grid item xs={1} display='flex' justifyContent='center' alignItems='center'>
        <Typography>#</Typography>
      </Grid>
      <Grid item xs={2}>
        {/* Image */}
      </Grid>
      <Grid item xs={2} display='flex' justifyContent='start' alignItems='center'>
        <Typography>Name</Typography>
      </Grid>
      <Grid item xs={4.5} display='flex' justifyContent='end' alignItems='center' pr={1}>
        <Typography>Price</Typography>
      </Grid>
    </Grid>
  );
}

export default Header;