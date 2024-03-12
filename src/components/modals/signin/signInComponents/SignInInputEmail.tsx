'use client'

import { InputReactHookProps } from "@/@types/types";
import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Grid, TextField } from "@mui/material";


const SignInInputEmail = ({ register, errors }: InputReactHookProps) => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)

  return (
    <>
      <Grid item>
        <TextField
          variant='outlined'
          label='Email:'
          InputLabelProps={{ style: { color: colors.grey[100] } }}
          fullWidth
          {...register('email', { required: true })}
          error={errors?.email?.type == 'required'}
          helperText={errors?.email?.type === 'required' && 'Enter your email'}
        />
      </Grid>
    </>
  );
}

export default SignInInputEmail;