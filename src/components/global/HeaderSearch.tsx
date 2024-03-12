'use client'

import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Box, Typography, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Dispatch, SetStateAction } from 'react';
import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";

type HeaderSearchProps = {
  title: string
  setSearch: Dispatch<SetStateAction<string>>
}

const HeaderSearch = ({ title, setSearch }: HeaderSearchProps) => {

  const { mode } = useThemeMode()
  const { sm } = useMediaQueryAdapted()

  const colors = tokens(mode)

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' width='100%' pt={2}>
      <Typography sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Box
        display='flex'
        width={sm ? 120 : 180}
        height='auto'
        border='1px solid'
        borderColor={colors.grey[400]}
        borderRadius={1.5}
        pl={2}
        justifyContent='space-between'
        alignItems='center'
      >
        <InputBase
          type="text"
          placeholder="Search.."
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon sx={{ color: colors.grey[400], mr: '2px' }} />
      </Box>
    </Box>
  );
}

export default HeaderSearch;