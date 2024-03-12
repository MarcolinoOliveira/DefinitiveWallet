'use client'

import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const CurrencyRoot = ({ children }: { children: ReactNode }) => {

  const { lg } = useMediaQueryAdapted()

  const height = lg ? 'auto' : '91vh'
  const marginTop = lg ? '70px' : '0px'

  return (
    <Box
      display='flex'
      flexDirection='column'
      width='100%'
      height={height}
      marginTop={marginTop}
      justifyContent='start'
      alignItems='start'
      gap={1}
    >
      {children}
    </Box>
  );
}

export default CurrencyRoot;