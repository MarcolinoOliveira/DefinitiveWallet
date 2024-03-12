'use client'

import { Grid, Typography } from "@mui/material";

type TraderValueProps = {
  value: number
}

const TraderValue = ({ value }: TraderValueProps) => {

  return (
    <Grid item xs={4.6} sm={4} md={2.5} display='flex' justifyContent='center' alignItems='center'>
      <Typography sx={{ fontWeight: 500 }}>
        {value?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </Typography>
    </Grid>
  );
}

export default TraderValue;