'use client'

import { CurrencysProps } from "@/@types/types";
import { Grid } from "@mui/material";

const CryptoImage = ({ text }: CurrencysProps) => {

  return (
    <Grid item xs={1} sm={0.5} md={0.5} display='flex' justifyContent='center' alignItems='center'>
      <img src={text} alt="coin symbol" width={25} height={25} />
    </Grid>
  );
}

export default CryptoImage;