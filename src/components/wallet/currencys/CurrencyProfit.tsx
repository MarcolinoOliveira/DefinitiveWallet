'use client'

import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Box, Typography } from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type CurrencyProfitProps = {
  balance: number
  contributed: number
}

const CurrencyProfit = ({ balance, contributed }: CurrencyProfitProps) => {

  const { mode } = useThemeMode()
  const colors = tokens(mode)

  const percent = balance ? (((balance * 100) / contributed) - 100).toFixed(0) : 0
  const profit = balance ? (balance - contributed) : 0
  const color = profit === 0 ? colors.grey[100] : profit > 0 ? '#00dc07' : 'red'
  const precentReplace = percent ? percent.replace('-', '') : percent
  const profitReplace = profit ? (profit?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })).replace('-', '') : profit
  const marginLeft = profit === 0 ? '5px' : '-5px'

  return (
    <Box display='flex' width='100%' justifyContent='space-between' alignItems='center'>
      <Typography variant="body2" color={colors.violet[500]} sx={{ fontWeight: 500 }}>
        Profit:
      </Typography>
      <Box display='flex' alignItems='center'>
        {profit > 0 && <ArrowDropUpIcon sx={{ color: color }} />}
        {profit < 0 && <ArrowDropDownIcon sx={{ color: color }} />}
        <Typography variant='body2' sx={{ fontWeight: 500 }} color={color} ml={marginLeft}>
          {profitReplace} ({precentReplace}%)
        </Typography>
      </Box>
    </Box>
  );
}

export default CurrencyProfit;