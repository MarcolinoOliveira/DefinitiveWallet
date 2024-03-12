'use client'

import { InputAdornment, TextField, colors } from "@mui/material";
import useThemeMode from "../../../../hooks/useThemeMode";
import { tokens } from '@/theme/theme';
import { BuyInputProps } from "@/@types/types";
import { currencyTask } from "@/libs/currencyTask";
import { ChangeEvent } from "react";

const CoinPriceInput = ({ trader, setTrader }: BuyInputProps) => {

  const { mode } = useThemeMode();
  const colors = tokens(mode)

  const contribution = parseFloat(trader.value?.replace(",", ""))

  const handlerChangePriceCoin = (e: ChangeEvent<HTMLInputElement>) => {
    const cryptos = contribution / parseFloat(e.target.value.replace(",", ""))
    setTrader({ ...trader, priceCoin: e.target.value, cryptos: cryptos ? cryptos.toString() : '' })
  }

  return (
    <TextField
      label="Currency Price:"
      variant='outlined'
      name='priceCoin'
      value={trader.priceCoin}
      InputLabelProps={{ style: { color: colors.grey[100] } }}
      InputProps={{ startAdornment: <InputAdornment position="start">U$</InputAdornment> }}
      fullWidth
      onChange={(e) => handlerChangePriceCoin(currencyTask(e))}
    />
  );
}

export default CoinPriceInput;