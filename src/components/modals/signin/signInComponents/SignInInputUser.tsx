'use client'

import { InputReactHookProps } from "@/@types/types";
import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Grid, TextField } from "@mui/material";

const SignInInputUser = ({ register, errors }: InputReactHookProps) => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)

  return (
    <Grid item>
      <TextField
        variant='outlined'
        label='Username:'
        InputLabelProps={{ style: { color: colors.grey[100] } }}
        fullWidth
        {...register('name', { required: true })}
        error={errors?.name?.type == 'required'}
        helperText={errors?.name?.type === 'required' && 'Fill in your name'} />
    </Grid>
  );
}

export default SignInInputUser;