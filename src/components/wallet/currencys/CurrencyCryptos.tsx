'use client'

import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Box, Typography } from "@mui/material";

type CurrencyCryptosProps = {
  cryptos: number
}

const CurrencyCryptos = ({ cryptos }: CurrencyCryptosProps) => {

  const { mode } = useThemeMode()
  const colors = tokens(mode)

  return (
    <Box display='flex' width='100%' justifyContent='space-between' alignItems='center'>
      <Typography variant="body2" color={colors.violet[500]} sx={{ fontWeight: 500 }}>
        Cryptos:
      </Typography>
      <Typography variant='body2' sx={{ fontWeight: 500 }} ml={0.5}>
        {cryptos?.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 6 })}
      </Typography>
    </Box>
  );
}

export default CurrencyCryptos;