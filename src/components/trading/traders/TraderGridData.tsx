'use client'

import { Divider, Grid } from "@mui/material"
import { ReactNode } from "react";

const TraderGridData = ({ children }: { children: ReactNode }) => {

  return (
    <>
      <Grid container direction='row'>
        {children}
      </Grid>
      <Divider />
    </>
  );
}

export default TraderGridData;