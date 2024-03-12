'use client'

import { Grid, Typography } from "@mui/material";

type TraderStatusProps = {
  status: string
}

const TraderStatus = ({ status }: TraderStatusProps) => {

  const color = status === 'buy' ? '#00dc07' : 'red'

  return (
    <Grid item xs={2.3} sm={1} display='flex' justifyContent='center' alignItems='center'>
      <Typography color={color} textTransform='uppercase' fontWeight='bold'>{status}</Typography>
    </Grid>
  );
}

export default TraderStatus;