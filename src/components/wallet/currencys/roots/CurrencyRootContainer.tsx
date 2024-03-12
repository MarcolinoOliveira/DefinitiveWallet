'use client'

import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import { Grid, Box } from "@mui/material";
import { ReactNode } from "react";

const CurrencyRootContainer = ({ children }: { children: ReactNode }) => {

  const { lg } = useMediaQueryAdapted()

  const height = lg ? 'auto' : '87vh'

  return (
    <Box height={height} sx={{ overflowY: 'auto' }} mt='10px' width='100%'>
      <Grid container spacing='20px'>
        {children}
      </Grid>
    </Box>
  );
}

export default CurrencyRootContainer;