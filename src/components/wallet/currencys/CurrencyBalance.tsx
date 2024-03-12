'use client'

import { Box, Typography } from "@mui/material";

type CurrencyBalance = {
  balance: number
}

const CurrencyBalance = ({ balance }: CurrencyBalance) => {

  return (
    <Box display='flex' alignItems='start' my={1.5}>
      <Typography sx={{ fontWeight: 600 }}>Balance :</Typography>
      <Typography sx={{ fontWeight: 600 }} ml={0.5}>
        {balance?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} USD
      </Typography>
    </Box>
  );
}

export default CurrencyBalance;