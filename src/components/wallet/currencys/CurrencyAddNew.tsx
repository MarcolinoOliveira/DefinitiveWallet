'use client'

import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter"
import useThemeMode from "@/hooks/useThemeMode"
import { tokens } from "@/theme/theme"
import { Box, Button, Grid, styled } from "@mui/material"

type CurrencyAddNewProps = {
  toggle: () => void
}

const CurrencyAddNew = ({ toggle }: CurrencyAddNewProps) => {

  const { mode } = useThemeMode()
  const { sm } = useMediaQueryAdapted()

  const colors = tokens(mode)
  const height = sm ? '204px' : '268px'

  const CustomBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid',
    borderColor: colors.grey[500],
    borderRadius: 1,
    borderStyle: 'dashed',
    width: '100%'
  }))

  return (
    <Grid item xs={12} md={6} lg={4}>
      <CustomBox>
        <Button onClick={toggle} sx={{ height: height }} fullWidth>
          add new currency
        </Button>
      </CustomBox>
    </Grid>
  );
}

export default CurrencyAddNew;