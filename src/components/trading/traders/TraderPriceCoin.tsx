'use client'

import { Grid, Typography } from "@mui/material";

type TraderPriceCoinProps = {
  priceCoin: number
}

const TraderPriceCoin = ({ priceCoin }: TraderPriceCoinProps) => {

  return (
    <Grid item xs={2} display='flex' justifyContent='center' alignItems='center'>
      <Typography sx={{ fontWeight: 500 }}>
        {priceCoin?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </Typography>
    </Grid>
  );
}

export default TraderPriceCoin;