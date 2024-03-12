'use client'

import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import { Grid, Typography } from "@mui/material";

type TraderNameProps = {
  name: string
  symbol: string
}

const TraderName = ({ name, symbol }: TraderNameProps) => {

  const { md } = useMediaQueryAdapted()

  return (
    <Grid item xs={1.2} sm={1} display='flex' justifyContent='start' alignItems='center'>
      {md && <Typography textTransform='uppercase' fontWeight={500}>{symbol}</Typography>}
      {!md && <Typography fontWeight={500}>{name}</Typography>}
    </Grid>
  );
}

export default TraderName;