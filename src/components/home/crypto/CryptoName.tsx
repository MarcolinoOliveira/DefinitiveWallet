'use client'

import { CurrencysProps } from "@/@types/types";
import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import { Box, Grid, Typography } from "@mui/material";

const CryptoName = ({ text, symbol }: CurrencysProps) => {
  const { md } = useMediaQueryAdapted()

  return (
    <Grid item xs={2} sm={2} md={2.5} display='flex' alignItems='center' pl={1}>
      <Box display='flex' gap={1} alignItems='center'>
        {!md && <Typography fontWeight='medium'>{text}</Typography>}
        <Typography fontWeight='bold' textTransform='uppercase'>{symbol}</Typography>
      </Box>
    </Grid>
  );
}

export default CryptoName;