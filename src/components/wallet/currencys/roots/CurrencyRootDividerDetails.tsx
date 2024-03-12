'use client'

import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const CurrencyRootDividerDetails = ({ children }: { children: ReactNode }) => {

  const { sm } = useMediaQueryAdapted()

  const width = sm ? '100%' : '50%'
  const gap = sm ? 1 : 0.5

  return (
    <Box
      display='flex'
      flexDirection='column'
      width={width}
      gap={gap}
    >
      {children}
    </Box>
  );
}

export default CurrencyRootDividerDetails;