'use client'

import { Grid } from "@mui/material";

const CryptoRoot = ({ children }: { children: React.ReactNode }) => {

  return (
    <Grid container direction='row' py={2.5}>
      {children}
    </Grid>
  );
}

export default CryptoRoot;