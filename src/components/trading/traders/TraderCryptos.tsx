'use client'

import { Grid, Typography } from "@mui/material";

type TraderCryptosProps = {
  cryptos: number
}

const TraderCryptos = ({ cryptos }: TraderCryptosProps) => {

  return (
    <Grid item xs={1.2} display='flex' justifyContent='center' alignItems='center'>
      <Typography sx={{ fontWeight: 500 }}>
        {cryptos?.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 6 })}
      </Typography>
    </Grid>
  );
}

export default TraderCryptos;