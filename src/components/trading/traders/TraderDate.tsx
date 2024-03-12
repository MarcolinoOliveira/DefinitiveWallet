'use client'

import { Grid, Typography } from "@mui/material";

type TraderDateProps = {
  date: string
}

const TraderDate = ({ date }: TraderDateProps) => {

  return (
    <Grid item xs={3.6} sm={2} md={1} display='flex' justifyContent='center' alignItems='center'>
      <Typography sx={{ fontWeight: 500 }}>
        {new Date(date).toLocaleDateString()}
      </Typography>
    </Grid>
  );
}

export default TraderDate;