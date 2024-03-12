'use client'

import { Box, Grid } from "@mui/material";
import LastTradings from "./LastTrandings";
import PieChart from "./PieChart";
import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import BarChartAllTime from "./BarChartAllTime";
import WalletProfit from "./WalletProfit";
import BarChartNegotiations from "./BarChartNegotiations";

const MyDashboard = () => {

  const { lg } = useMediaQueryAdapted()

  const marginTop = lg ? '90px' : '20px'

  return (
    <Box display='flex' flexDirection='column' gap='20px' width='100%' mt={marginTop}>
      <Grid container direction='row' spacing='20px'>
        <Grid item xs={12} md={4.5} lg={4.5}>
          <PieChart />
        </Grid>
        <Grid item xs={12} md={4.5} lg={4.5}>
          <BarChartAllTime />
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <WalletProfit />
        </Grid>
      </Grid>
      <Grid container direction='row' spacing='20px'>
        <Grid item xs={12} md={9}>
          <BarChartNegotiations />
        </Grid>
        <Grid item xs={12} md={3}>
          <LastTradings />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyDashboard;