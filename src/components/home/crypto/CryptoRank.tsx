'use client'

import { CurrencysProps } from "@/@types/types";
import { Grid, Typography } from "@mui/material";

const CryptoRank = ({ value }: CurrencysProps) => {

  return (
    <Grid item xs={1} sm={0.5} md={0.5} display='flex' justifyContent='center' alignItems='center'>
      <Typography fontWeight='medium'>{value}</Typography>
    </Grid>
  );
}

export default CryptoRank;