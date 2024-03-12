'use client'

import { useCoinsWallet, useTradingsWallet } from "@/hooks/useCoinsWallet"
import { Trader } from "./traders"
import { Suspense, useRef, useState } from "react"
import { useSetAlertBar } from "@/hooks/useAlertBar"
import { deleteCoinTrader } from "@/firebase/delete"
import { useSession } from "next-auth/react"
import HeaderTradings from "./HeaderTradings"
import HeaderData from "./HeaderData"
import { traderCoinProps } from "@/@types/types"
import { Box, MenuItem, Typography } from "@mui/material"
import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter"
import SubMenu from "../global/SubMenu"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DetailsModalTrader from "../modals/Details/DetailsModalTrader"
import { useModalsWallet } from "@/hooks/useModalsWallet"
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Divider } from "@mui/material"

const Tradings = () => {

  const [search, setSearch] = useState<Array<string>>([])
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const traderRef = useRef<traderCoinProps>()

  const { coinsWallet } = useCoinsWallet()
  const { tradingsWallet } = useTradingsWallet()
  const { toggleModalDetailsTrader } = useModalsWallet()
  const { setAlert } = useSetAlertBar()
  const { data: session } = useSession()
  const { sm, md } = useMediaQueryAdapted()

  const email = session?.user?.email
  const open = Boolean(anchorEl)
  const orderByDataTrader = tradingsWallet.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const searchCoins = orderByDataTrader?.filter(coin => search.length != 0 ? search.includes(coin.name) : coin.name)

  const handleClick = (event: any, trader: traderCoinProps) => {
    traderRef.current = trader
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTrader = () => {
    if (!traderRef.current) return
    const balanceCrypto = coinsWallet.find((item) => {
      if (item.name === traderRef.current?.name) {
        return item
      }
    })
    if (balanceCrypto && traderRef.current.cryptos > balanceCrypto?.cryptos && traderRef.current.status === 'buy') {
      return setAlert({ open: true, textAlert: 'balance incorrect', severity: 'error' })
    }
    deleteCoinTrader({ email, id: traderRef.current.id })
    setAlert({ open: true, textAlert: 'Trading deleted', severity: 'success' })
  }

  return (
    <Trader.Root>
      <HeaderTradings search={search} setSearch={setSearch} />
      <Trader.RootContainer>
        <HeaderData />
        <Suspense fallback={<Box>Loading...</Box>}>
          <Trader.RootGridData>
            {searchCoins?.map((item, key) => (
              <Trader.GridData key={key}>
                <Trader.Image image={item.image} />
                {!sm && <Trader.Name name={item.name} symbol={item.symbol} />}
                <Trader.Status status={item.status} />
                <Trader.Date date={item.date} />
                {!md && <Trader.PriceCoin priceCoin={item.priceCoin} />}
                <Trader.Value value={item.value} />
                {!md && <Trader.Cryptos cryptos={item.cryptos} />}
                {!sm && <Trader.Profit item={item} />}
                <Trader.Action handleClick={handleClick} trader={item} />
              </Trader.GridData>
            ))}
          </Trader.RootGridData>
        </Suspense>
      </Trader.RootContainer>

      <SubMenu anchorEl={anchorEl} handleClose={handleClose} open={open}>
        {md &&
          <MenuItem onClick={toggleModalDetailsTrader}>
            <Box display='flex'>
              <DescriptionOutlinedIcon sx={{ mr: 0.5 }} />
              <Typography>All Details</Typography>
            </Box>
          </MenuItem>
        }
        {md && <Divider />}
        <MenuItem onClick={handleDeleteTrader}>
          <Box display='flex'>
            <DeleteOutlineIcon sx={{ mr: 0.5 }} color="error" />
            <Typography color='error'>Delete</Typography>
          </Box>
        </MenuItem>
      </SubMenu>
      {traderRef.current && <DetailsModalTrader trader={traderRef.current} />}
    </Trader.Root>
  );
}

export default Tradings;