'use client'

import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const TraderRootContainer = ({ children }: { children: ReactNode }) => {

  const { lg } = useMediaQueryAdapted()
  const { mode } = useThemeMode()

  const colors = tokens(mode)
  const height = lg ? '100vh' : '88vh'

  return (
    <Box
      display='flex'
      flexDirection='column'
      width='100%'
      height='auto'
      bgcolor={colors.grey[900]}
      borderRadius={2}
    >
      {children}
    </Box>
  );
}

export default TraderRootContainer;