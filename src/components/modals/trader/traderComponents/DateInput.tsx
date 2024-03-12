'use client'

import { ChangeEvent } from 'react';
import { InputAdornment, TextField, colors } from "@mui/material";
import useThemeMode from "../../../../hooks/useThemeMode";
import { BuyInputProps } from '@/@types/types';
import { tokens } from '@/theme/theme';
import DateRangeIcon from '@mui/icons-material/DateRange';

const DateInput = ({ trader, setTrader }: BuyInputProps) => {

  const { mode } = useThemeMode();
  const colors = tokens(mode)

  const handlerChangeDate = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTrader({ ...trader, date: e.target.value })
  }

  return (
    <TextField
      label="Date of contribution:"
      variant='outlined'
      type='Date'
      name='date'
      defaultValue={trader.date}
      InputLabelProps={{ style: { color: colors.grey[100] } }}
      InputProps={{
        startAdornment:
          <InputAdornment position="start">
            <DateRangeIcon sx={{ color: colors.grey[200] }} fontSize='small' />
          </InputAdornment>
      }}
      fullWidth
      onChange={(e) => handlerChangeDate(e)}
    />
  );
}

export default DateInput;