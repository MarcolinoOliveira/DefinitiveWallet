'use client'

import { Grid, Typography } from "@mui/material";

interface SignInTitleProps {
  text: string
}

const SignInTitle = ({ text }: SignInTitleProps) => {
  return (
    <Grid item width='100%' display='flex' justifyContent='center' mb={2}>
      <Typography variant='h6'>{text}</Typography>
    </Grid>
  );
}

export default SignInTitle;