'use client'

import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Button, Typography } from "@mui/material";

interface SignInButtonProps {
  onClick: () => void
  text: string
}

const SignInButton = ({ onClick, text }: SignInButtonProps) => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)

  return (
    <Button
      onClick={onClick}
      fullWidth
      variant='contained'
    >
      <Typography color={colors.white[500]} sx={{ fontWeight: 'bold' }}>
        {text}
      </Typography>
    </Button>
  );
}

export default SignInButton;