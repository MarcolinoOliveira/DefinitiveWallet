'use client'

import { InputAdornment, TextField, colors } from "@mui/material";
import useThemeMode from "../../../../hooks/useThemeMode";
import { BuyInputProps } from '@/@types/types';
import { tokens } from '@/theme/theme';
import { currencyTask } from '@/libs/currencyTask';
import { ChangeEvent } from "react";


const ValueInput = ({ trader, status, setTrader }: BuyInputProps) => {

  const { mode } = useThemeMode();
  const colors = tokens(mode)

  const price = parseFloat(trader.priceCoin?.replace(",", ""))

  const handlerChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const cryptos = parseFloat(e.target.value.replace(",", "")) / price
    setTrader({ ...trader, value: e.target.value, cryptos: cryptos ? cryptos.toString() : '' })
  }

  return (
    <TextField
      label={status === 'buy' ? "Contribution value:" : "Withdrawl amount"}
      variant='outlined'
      value={trader.value}
      InputLabelProps={{ style: { color: colors.grey[100] } }}
      InputProps={{ startAdornment: <InputAdornment position="start">U$</InputAdornment> }}
      fullWidth
      onChange={(e) => handlerChangeValue(currencyTask(e))}
    />
  );
}

export default ValueInput;