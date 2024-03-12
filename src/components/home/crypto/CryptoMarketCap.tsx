'use client'

import { CurrencysProps } from "@/@types/types";
import { Grid, Typography } from "@mui/material";

const CryptoMarketCap = ({ value }: CurrencysProps) => {
  return (
    <Grid item xs={0} sm={4} md={2.5} display='flex' justifyContent='end' alignItems='center' pr={2}>
      <Typography fontWeight='medium'>
        {value?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </Typography>
    </Grid>
  );
}

export default CryptoMarketCap;