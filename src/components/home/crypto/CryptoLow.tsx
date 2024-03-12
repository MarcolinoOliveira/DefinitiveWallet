'use client'

import { CurrencysProps } from "@/@types/types";
import { Grid, Typography } from "@mui/material";

const CryptoLow = ({ value }: CurrencysProps) => {
  return (
    <Grid item xs={0} sm={0} md={1.5} display='flex' justifyContent='end' alignItems='center'>
      <Typography fontWeight='medium'>
        {value?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </Typography>
    </Grid>
  );
}

export default CryptoLow;