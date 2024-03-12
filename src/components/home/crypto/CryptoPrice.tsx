'use client'

import { CurrencysProps } from "@/@types/types";
import { Grid, Typography } from "@mui/material";

const CryptoPrice = ({ value }: CurrencysProps) => {

  return (
    <Grid item xs={5} sm={3} md={1.5} display='flex' justifyContent='end' alignItems='center'>
      <Typography fontWeight='medium'>
        {value?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </Typography>
    </Grid>
  );
}

export default CryptoPrice;