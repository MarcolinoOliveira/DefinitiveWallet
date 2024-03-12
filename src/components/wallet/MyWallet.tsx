'use client'

import { Box, MenuItem, Typography } from "@mui/material";
import HeaderSearch from "../global/HeaderSearch";
import { Suspense, useRef, useState } from "react";
import SubMenu from "../global/SubMenu";
import { useCoinsWallet, useTradingsWallet } from "@/hooks/useCoinsWallet";
import { TraderModalProps, coinsWalletProps } from "@/@types/types";
import { useSetAlertBar } from "@/hooks/useAlertBar";
import { useSession } from "next-auth/react";
import { deleteCoinTrader, deleteCoinWallet } from "@/firebase/delete";
import AddCoinModal from "../modals/addCoin/AddCoinModal";
import TraderModal from "../modals/trader/TraderModal";
import { Currency } from "./currencys";
import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import { useModalsWallet } from "@/hooks/useModalsWallet";
import CurrencyDetails from "./CurrencyDetails";
import DetailsModalWallet from "../modals/Details/DetailsModalWallet";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';


const MyWallet = () => {

  const [search, setSearch] = useState('')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const statusRef = useRef('')
  const coinRef = useRef<coinsWalletProps>()

  const { coinsWallet } = useCoinsWallet()
  const { tradingsWallet } = useTradingsWallet()
  const { toggleModalAddCoin, toggleModalTrader, toggleModalDetailsWallet } = useModalsWallet()
  const { setAlert } = useSetAlertBar()
  const { data: session } = useSession()
  const { sm } = useMediaQueryAdapted()

  const open = Boolean(anchorEl)
  const email = session?.user?.email
  const orderBalanceCoin = coinsWallet.sort((a, b) => (b.balance) - (a.balance))

  const searchCoins = orderBalanceCoin.filter(coin => coin.name?.toLowerCase().includes(search?.toLowerCase()) ||
    coin.symbol?.toLowerCase().includes(search?.toLowerCase())
  )

  const handlerModalTrader = ({ coin, status }: TraderModalProps) => {
    coinRef.current = coin
    statusRef.current = status
    toggleModalTrader()
  }

  const handleClick = (event: any, coin: coinsWalletProps) => {
    coinRef.current = coin
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteCoin = () => {
    tradingsWallet.forEach((item) => {
      if (item.name === coinRef.current?.name) {
        deleteCoinTrader({ email, id: item.id })
      }
    })
    deleteCoinWallet({ email, id: coinRef.current?.id })
    setAlert({ open: true, textAlert: 'Currency deleted', severity: 'success' })
  }

  return (
    <Currency.Root>
      <Suspense fallback={<Box>Loading...</Box>}>
        <HeaderSearch title="Your Currencys" setSearch={setSearch} />
        <Currency.RootContainer>
          {searchCoins?.map((item, key) => (
            <Currency.RootCoins key={key}>
              <Currency.RootHeader>
                <Currency.Header coin={item} />
                <Currency.DeleteAction handleClick={handleClick} coin={item} />
              </Currency.RootHeader>
              <Currency.Balance balance={item.balance} />
              {sm && <Currency.Profit balance={item.balance} contributed={item.contributed} />}
              {!sm && <CurrencyDetails coin={item} />}
              <Currency.Actions handleClick={handlerModalTrader} item={item} />
            </Currency.RootCoins>
          ))}
          <Currency.AddNew toggle={toggleModalAddCoin} />
        </Currency.RootContainer>

        <SubMenu anchorEl={anchorEl} handleClose={handleClose} open={open}>
          {sm &&
            <MenuItem onClick={toggleModalDetailsWallet}>
              <Box display='flex'>
                <DescriptionOutlinedIcon sx={{ mr: 0.5 }} />
                <Typography>All Details</Typography>
              </Box>
            </MenuItem>
          }
          <MenuItem onClick={handleDeleteCoin}>
            <Box display='flex'>
              <DeleteOutlineIcon sx={{ mr: 0.5 }} color="error" />
              <Typography color='error'>Delete</Typography>
            </Box>
          </MenuItem>
        </SubMenu>

        {coinRef.current && <TraderModal coin={coinRef.current} status={statusRef.current} />}
        {coinRef.current && <DetailsModalWallet coin={coinRef.current} />}
        <AddCoinModal />
      </Suspense>
    </Currency.Root>
  );
}

export default MyWallet;