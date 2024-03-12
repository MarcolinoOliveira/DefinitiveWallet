'use client'

import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Box, Typography } from "@mui/material";

type CurrencySellingAmountProps = {
  sellingAmount: number
}

const CurrencySellingAmount = ({ sellingAmount }: CurrencySellingAmountProps) => {

  const { mode } = useThemeMode()
  const colors = tokens(mode)

  return (
    <Box display='flex' width='100%' justifyContent='space-between' alignItems='center'>
      <Typography variant="body2" color={colors.violet[500]} sx={{ fontWeight: 500 }}>
        Total Selling:
      </Typography>
      <Typography variant='body2' sx={{ fontWeight: 500 }} ml={0.5}>
        {sellingAmount?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </Typography>
    </Box>
  );
}

export default CurrencySellingAmount;