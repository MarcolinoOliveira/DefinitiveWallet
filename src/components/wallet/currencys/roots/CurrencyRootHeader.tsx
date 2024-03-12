'use client'

import { Box } from "@mui/material";
import { ReactNode } from "react";

const CurrencyRootHeader = ({ children }: { children: ReactNode }) => {

  return (
    <Box display='flex' justifyContent='space-between'>
      {children}
    </Box>
  );
}

export default CurrencyRootHeader;