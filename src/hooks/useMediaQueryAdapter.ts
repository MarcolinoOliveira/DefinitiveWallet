'use client'

import { useTheme, useMediaQuery } from "@mui/material"

const useMediaQueryAdapted = () => {
  const theme = useTheme()

  const sm = useMediaQuery(theme.breakpoints.down('sm'))
  const md = useMediaQuery(theme.breakpoints.down('md'))
  const lg = useMediaQuery(theme.breakpoints.down('lg'))
  const xl = useMediaQuery(theme.breakpoints.down('xl'))

  return {
    sm,
    md,
    lg,
    xl
  };
}

export default useMediaQueryAdapted;