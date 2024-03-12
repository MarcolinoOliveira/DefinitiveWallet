'use client'

import { Grid } from "@mui/material";
import { ReactNode } from "react";

interface SignInActionsProps {
  children: ReactNode
}

const SignInActions = ({ children }: SignInActionsProps) => {
  return (
    <Grid item mt={1}>
      {children}
    </Grid>
  );
}

export default SignInActions;