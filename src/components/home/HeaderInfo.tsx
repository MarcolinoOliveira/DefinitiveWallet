'use client'

import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import { Grid, Typography, styled } from "@mui/material";

const HeaderInfo = () => {

  const { sm, md } = useMediaQueryAdapted()

  const CustomGrid = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    paddingRight: 1
  }))

  const CustomTypography = styled(Typography)(() => ({
    fontWeight: 500
  }))

  return (
    <Grid container direction='row' width='100%' py={2}>
      <Grid item xs={1} sm={0.5} display='flex' justifyContent='center' alignItems='center'>
        <CustomTypography>#</CustomTypography>
      </Grid>
      <Grid item xs={1} sm={0.5}>
        {/* Image */}
      </Grid>
      <Grid item xs={2} sm={2} md={2.5} display='flex' justifyContent='start' alignItems='center' pl={1}>
        <CustomTypography>Name</CustomTypography>
      </Grid>
      <CustomGrid item xs={5} sm={3} md={1.5}>
        <CustomTypography>Price</CustomTypography>
      </CustomGrid>
      <CustomGrid item xs={3} sm={2} md={1}>
        <CustomTypography>24h%</CustomTypography>
      </CustomGrid>
      {!md &&
        <>
          <CustomGrid item sm={2}>
            <CustomTypography>Hight 24h</CustomTypography>
          </CustomGrid>
          <CustomGrid item sm={1.5}>
            <CustomTypography>Low 24h</CustomTypography>
          </CustomGrid>
        </>
      }{!sm &&
        <CustomGrid item sm={4} md={2.3}>
          <CustomTypography>Market Cap</CustomTypography>
        </CustomGrid>
      }
    </Grid>
  );
}

export default HeaderInfo;