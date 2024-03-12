'use client'

import { CurrencysProps } from "@/@types/types";
import { Grid, Typography } from "@mui/material";

const CryptoPercent = ({ value }: CurrencysProps) => {

  return (
    <Grid item xs={3} sm={2} md={1} display='flex' justifyContent='end' alignItems='center' >
      {value != undefined &&
        <Typography
          color={value >= 0 ? '#00dc07' : 'red'}
          fontWeight='medium'
        >
          {value >= 0 && `+${value.toFixed(2)}`}
          {value < 0 && value.toFixed(2)}%
        </Typography>
      }
    </Grid>
  );
}

export default CryptoPercent;