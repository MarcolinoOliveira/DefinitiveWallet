'use client'

import { InputReactHookProps } from "@/@types/types";
import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Grid, TextField, IconButton } from "@mui/material";
import { useState } from "react";


const SignInInputPassword = ({ register, errors }: InputReactHookProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { mode } = useThemeMode()
  const colors = tokens(mode)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Grid item>
      <TextField
        label="Password:"
        variant='outlined'
        type={showPassword ? 'text' : 'password'}
        InputLabelProps={{ style: { color: colors.grey[100] } }}
        fullWidth
        {...register('password', { required: true })}
        error={errors?.password?.type == 'required'}
        helperText={errors?.password?.type === 'required' && 'Enter your password'}
      />
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        sx={{ ml: '-40px', mt: '7px', color: colors.grey[100] }}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </Grid>
  );
}

export default SignInInputPassword;