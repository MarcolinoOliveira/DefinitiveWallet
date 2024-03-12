'use client'

import { traderCoinProps } from "@/@types/types"
import { Grid, IconButton } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';

type TraderActionProps = {
  handleClick: (event: any, trader: traderCoinProps) => void
  trader: traderCoinProps
}

const TraderAction = ({ handleClick, trader }: TraderActionProps) => {

  return (
    <Grid item xs={0.5} display='flex' justifyContent='end' alignItems='center'>
      <IconButton onClick={(e) => handleClick(e, trader)}>
        <MoreVertIcon fontSize="small" />
      </IconButton>
    </Grid>
  );
}


export default TraderAction;