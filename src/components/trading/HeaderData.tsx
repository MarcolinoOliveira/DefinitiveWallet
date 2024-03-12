'use client'

import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import { Box, Divider, Grid, Typography, styled } from "@mui/material";

const HeaderData = () => {

  const { sm, md } = useMediaQueryAdapted()

  const CustomGridCenter = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }))

  const CustomTypography = styled(Typography)(() => ({
    variant: 'body2',
    fontWeight: 500
  }))

  return (
    <>
      <Box width='100%' py={2}>
        <Grid container direction='row'>
          <Grid item xs={1}>
            {/* Image */}
          </Grid>
          {!sm && <Grid item xs={1.2} sm={1} display='flex' justifyContent='start' alignItems='center'>
            <CustomTypography>Name</CustomTypography>
          </Grid>}
          <CustomGridCenter item xs={2.3} sm={1}>
            <CustomTypography>Type</CustomTypography>
          </CustomGridCenter>
          <CustomGridCenter item xs={3.6} sm={2} md={1}>
            <CustomTypography>Date</CustomTypography>
          </CustomGridCenter>
          {!md && <CustomGridCenter item xs={2}>
            <CustomTypography>Share price</CustomTypography>
          </CustomGridCenter>}
          <CustomGridCenter item xs={4.6} sm={4} md={2.5}>
            {sm && <CustomTypography>Amount</CustomTypography>}
            {!sm && <CustomTypography>Purchase / withdraw</CustomTypography>}
          </CustomGridCenter>
          {!md && <CustomGridCenter item xs={1.2}>
            <CustomTypography>Cryptos</CustomTypography>
          </CustomGridCenter>}
          {!sm && <CustomGridCenter item sm={2.5} md={1.8}>
            <CustomTypography>Profit</CustomTypography>
          </CustomGridCenter>}
          <CustomGridCenter item xs={0.5}>
            {/*Delete */}
          </CustomGridCenter>
        </Grid>
      </Box>
      <Divider />
    </>
  );
}

export default HeaderData;