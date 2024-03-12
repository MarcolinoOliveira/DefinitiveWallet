'use client'

import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const TraderRootGridData = ({ children }: { children: ReactNode }) => {

  const { lg } = useMediaQueryAdapted()

  const height = lg ? '100vh' : '69vh'

  return (
    <Box
      display='flex'
      flexDirection='column'
      width='100%'
      maxHeight={height}
      sx={{ overflowY: 'auto' }}
      gap={2}
      pt={1.5}
    >
      {children}
    </Box>
  );
}

export default TraderRootGridData;