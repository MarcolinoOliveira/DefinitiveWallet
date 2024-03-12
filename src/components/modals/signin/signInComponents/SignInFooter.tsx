'use client'

import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Grid, Box, Typography, Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface SignInFooterProps {
  onClick: Dispatch<SetStateAction<boolean>>
  text: string
  textButton: string
}

const SignInFooter = ({ onClick, text, textButton }: SignInFooterProps) => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)
  return (
    <Grid item mt={2}>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Typography variant='body2'>
          {text}
        </Typography>
        <Button onClick={() => onClick(prev => !prev)} variant='text'>
          <Typography color={colors.indigo[500]} textTransform='capitalize' mb={0.2} sx={{ fontWeight: 'bold' }}>
            {textButton}
          </Typography>
        </Button>
      </Box>
    </Grid>
  );
}


export default SignInFooter;