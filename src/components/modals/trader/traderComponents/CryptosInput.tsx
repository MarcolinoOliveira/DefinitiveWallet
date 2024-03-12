'use client'

import { Button, InputAdornment, TextField, colors } from "@mui/material";
import useThemeMode from "../../../../hooks/useThemeMode";
import { BuyInputProps } from '@/@types/types';
import { tokens } from '@/theme/theme';
import { ChangeEvent } from "react";

const CryptosInput = ({ trader, setTrader, image, status, cryptos }: BuyInputProps) => {

  const { mode } = useThemeMode();
  const colors = tokens(mode)

  const price = parseFloat(trader.priceCoin?.replace(",", ""))

  const handlerChangeCryptos = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const contribution = parseFloat(e.target.value.replace(",", "")) * price
    setTrader({ ...trader, cryptos: e.target.value, value: contribution ? contribution.toString() : '' })
  }

  const handlerMaxCryptos = () => {
    if (cryptos) {
      const contribution = cryptos * price
      setTrader({ ...trader, cryptos: cryptos?.toString(), value: contribution.toString() })
    }
  }

  return (
    <TextField
      label="Amount Cryptos:"
      variant='outlined'
      name='crypto'
      type='number'
      value={trader.cryptos}
      InputLabelProps={{ style: { color: colors.grey[100] } }}
      InputProps={{
        startAdornment:
          <InputAdornment position="start">
            <img src={image} alt="symbol" width={20} height={20} />
          </InputAdornment>,
        endAdornment:
          status === 'sell' ?
            <InputAdornment position="end">
              <Button onClick={handlerMaxCryptos}>MAX</Button>
            </InputAdornment>
            : null,
      }}
      fullWidth
      onChange={(e) => handlerChangeCryptos(e)}
    />
  );
}

export default CryptosInput;