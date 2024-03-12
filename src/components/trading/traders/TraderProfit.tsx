'use client'

import { traderCoinProps } from "@/@types/types";
import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Box, Grid, Typography } from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type TraderProfitProps = {
  item: traderCoinProps
}

const TraderProfit = ({ item }: TraderProfitProps) => {

  const { mode } = useThemeMode()
  const colors = tokens(mode)

  const balance = item.cryptos * item.priceUsd
  const percent = balance ? (((balance * 100) / item.value) - 100).toFixed(0) : 0
  const profit = balance ? (balance - item.value) : 0
  const color = profit === 0 ? colors.grey[100] : profit > 0 ? '#00dc07' : 'red'
  const precentReplace = percent ? percent.replace('-', '') : percent
  const profitReplace = profit ? (profit?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })).replace('-', '') : profit
  const marginLeft = profit === 0 ? '5px' : '-5px'

  return (
    <Grid item sm={2.5} md={1.8} display='flex' justifyContent='center' alignItems='center'>
      {item.status != 'sell' &&
        <Box display='flex' alignItems='center'>
          {profit > 0 && <ArrowDropUpIcon sx={{ color: color }} />}
          {profit < 0 && <ArrowDropDownIcon sx={{ color: color }} />}
          <Typography variant='body2' sx={{ fontWeight: 500 }} color={color} ml={marginLeft}>
            {profitReplace} ({precentReplace}%)
          </Typography>
        </Box>
      }
    </Grid>
  );
}

export default TraderProfit