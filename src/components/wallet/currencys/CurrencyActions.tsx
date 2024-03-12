'use client'

import { TraderModalProps, coinsWalletProps } from "@/@types/types";
import { Box, Button, Typography } from "@mui/material";

type CurrencyActionsProps = {
  handleClick: ({ coin, status }: TraderModalProps) => void
  item: coinsWalletProps
}

const CurrencyActions = ({ handleClick, item }: CurrencyActionsProps) => {

  return (
    <Box display='flex' gap={2} height='40px' justifyContent='center' alignItems='center' mt={1.5}>
      <Button variant="contained" fullWidth sx={{ height: '30px' }} onClick={() => handleClick({ coin: item, status: 'buy' })}>
        <Typography textTransform="capitalize" sx={{ fontWeight: 500 }}>
          Purchase
        </Typography>
      </Button>
      <Button variant="contained" fullWidth sx={{ height: '30px' }} onClick={() => handleClick({ coin: item, status: 'sell' })}>
        <Typography textTransform="capitalize" sx={{ fontWeight: 500 }}>
          Withdraw
        </Typography>
      </Button>
    </Box>
  );
}

export default CurrencyActions;