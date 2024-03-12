'use client'

import { Box, Button, IconButton, MenuItem, Typography } from "@mui/material";
import { useCoinsWallet } from "@/hooks/useCoinsWallet";
import SubMenu from "../global/SubMenu";
import { Dispatch, SetStateAction, useState } from "react";
import TuneIcon from '@mui/icons-material/Tune';
import useThemeMode from "@/hooks/useThemeMode";
import ClearIcon from '@mui/icons-material/Clear';
import { tokens } from "@/theme/theme";
import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";

type HeaderTradringsProps = {
  search: Array<string>
  setSearch: Dispatch<SetStateAction<Array<string>>>
}

const HeaderTradings = ({ search, setSearch }: HeaderTradringsProps) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { coinsWallet } = useCoinsWallet()
  const { mode } = useThemeMode()
  const { sm } = useMediaQueryAdapted()

  const colors = tokens(mode)
  const open = Boolean(anchorEl)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteSearch = (name: string) => {
    const nameDeleted = search.find((item) => {
      return item === name
    })
    search.map((item) => {
      if (search.length === 1) return setSearch([])
      if (item != nameDeleted) return setSearch([item])
    })
  }

  return (
    <>
      <Box display='flex' justifyContent='space-between' pt={2} width='100%'>
        <Box display='flex' flexDirection='row' gap={1} height='50px' alignItems='center'>
          <Typography fontWeight='bold' variant="h6">Your Tradings</Typography>
          {!sm &&
            <Box display='flex' gap={1}>
              {search.map((name, key) => (
                <Box key={key} display='flex' pl={1} bgcolor={colors.grey[900]} borderRadius={2} gap={0.4} alignItems='center'>
                  <Typography variant="body2">{name}</Typography>
                  <IconButton onClick={() => handleDeleteSearch(name)}>
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </Box>
              ))}
            </Box>}
        </Box>
        <Box display='flex' height='50px' alignItems='center'>
          <Button
            variant="outlined"
            endIcon={<TuneIcon />}
            onClick={handleClick}
            sx={{ height: '35px' }}
          >
            Filter
          </Button>
        </Box>

        <SubMenu open={open} anchorEl={anchorEl} handleClose={handleClose}>
          {coinsWallet.map((item, key) => (
            <MenuItem key={key} onClick={() => setSearch(prev => [...prev, item.name])}>
              <Box display='flex' gap={1}>
                <img src={item.imageSmall} alt='symbol' width={25} height={25} />
                <Typography>{item.name}</Typography>
              </Box>
            </MenuItem>
          ))}
        </SubMenu>
      </Box>
      {sm &&
        <Box display='flex' gap={0.8}>
          {search.map((name, key) => (
            <Box key={key} display='flex' pl={1} bgcolor={colors.grey[900]} borderRadius={2} gap={0.4} alignItems='center'>
              <Typography variant="body2">{name}</Typography>
              <IconButton onClick={() => handleDeleteSearch(name)}>
                <ClearIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>}
    </>
  );
}

export default HeaderTradings;