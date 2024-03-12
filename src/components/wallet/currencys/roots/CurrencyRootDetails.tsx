'use client'

import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const CurrencyRootDetails = ({ children }: { children: ReactNode }) => {

  const { sm } = useMediaQueryAdapted()

  const direction = sm ? 'column' : 'row'
  const gap = sm ? 1 : 2

  return (
    <Box display='flex' flexDirection={direction} width='100%' gap={gap}>
      {children}
    </Box>
  );
}

export default CurrencyRootDetails;