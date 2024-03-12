'use client'

import { coinsWalletProps } from "@/@types/types";
import { Box, Typography } from "@mui/material";

type CurrencyHeaderProps = {
  coin: coinsWalletProps
}

const CurrencyHeader = ({ coin }: CurrencyHeaderProps) => {

  return (
    <Box display='flex'>
      <img src={coin.imageSmall} alt="symbol" width={40} height={40} />
      <Box ml={1.5}>
        <Typography fontWeight='bold'>{coin.name}</Typography>
        <Typography variant="body2" textTransform='uppercase'>
          1 {coin.symbol} = {coin.priceUsd?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} USD
        </Typography>
      </Box>
    </Box>
  );
}

export default CurrencyHeader;