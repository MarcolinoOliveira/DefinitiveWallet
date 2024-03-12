'use client'

import { coinsWalletProps } from "@/@types/types";
import { Box, IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

type CurrencyDeleteActionProps = {
  handleClick: (event: any, coin: coinsWalletProps) => void
  coin: coinsWalletProps
}

const CurrencyDeleteAction = ({ handleClick, coin }: CurrencyDeleteActionProps) => {
  return (
    <Box>
      <IconButton onClick={(e) => handleClick(e, coin)} sx={{ width: 10 }}>
        <MoreVertIcon />
      </IconButton>
    </Box>
  );
}

export default CurrencyDeleteAction;