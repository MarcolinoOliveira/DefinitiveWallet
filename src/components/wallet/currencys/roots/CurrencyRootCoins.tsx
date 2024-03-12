'use client'

import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Box, Grid } from "@mui/material";
import { ReactNode } from "react";

const CurrencyRootCoins = ({ children }: { children: ReactNode }) => {

  const { mode } = useThemeMode()
  const colors = tokens(mode)

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box
        display='flex'
        width='100%'
        flexDirection='column'
        height='auto'
        border='1px solid'
        borderColor={colors.grey[500]}
        borderRadius={1}
        p={2}
        gap={1}
        bgcolor={colors.grey[900]}
      >
        {children}
      </Box>
    </Grid>
  );
}

export default CurrencyRootCoins;