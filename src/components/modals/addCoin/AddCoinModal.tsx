'use client'

import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Box, Divider, Grid, IconButton, Modal, Typography } from "@mui/material";
import { useRef, useState } from "react";
import HeaderSearch from "../../global/HeaderSearch";
import Header from "./Header";
import { rowListCryptosProps } from "@/@types/types";
import { addCoinWallet } from "@/firebase/addDoc";
import { useSession } from "next-auth/react";
import useApiData from "@/hooks/useApiData";
import { FixedSizeList } from "react-window";
import { useSetAlertBar } from "@/hooks/useAlertBar";
import { useCoinsWallet } from "@/hooks/useCoinsWallet";
import { useModalsWallet } from "@/hooks/useModalsWallet";
import AddBoxIcon from '@mui/icons-material/AddBox';

const AddCoinModal = () => {

  const [search, setSearch] = useState<string>('')

  const coinExistRef = useRef<boolean>(false)

  const { isOpenAddCoin, toggleModalAddCoin } = useModalsWallet()
  const { setAlert } = useSetAlertBar()
  const { data } = useApiData()
  const { coinsWallet } = useCoinsWallet()
  const { sm } = useMediaQueryAdapted()
  const { mode } = useThemeMode()
  const { data: session } = useSession()

  const colors = tokens(mode)
  const email = session?.user?.email

  const searchCoins = data?.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  )

  const handleAddCoin = async (id: string) => {
    for (let i = 0; i < coinsWallet.length; i++) {
      if (coinsWallet[i].id === id) {
        coinExistRef.current = true
        break
      } else {
        coinExistRef.current = false
      }
    }
    if (coinExistRef.current === false && email) {
      await addCoinWallet({ id, email })
      setAlert({ open: true, textAlert: 'Currency has been Registered', severity: 'success' })
      toggleModalAddCoin()
    } else {
      setAlert({ open: true, textAlert: 'Currency already registered', severity: 'error' })
    }
  }

  const rowListCrytos = ({ index, style }: rowListCryptosProps) => {
    if (searchCoins) {
      const coin = searchCoins[index]

      return (
        <div key={coin.id} style={style}>
          <Box sx={{ cursor: 'pointer', ":hover": { bgcolor: colors.primary[400] } }}>
            <Grid container direction='row' py={0.5}>
              <Grid item xs={1} display='flex' justifyContent='center' alignItems='center'>
                <Typography>{coin.market_cap_rank}</Typography>
              </Grid>
              <Grid item xs={2} display='flex' justifyContent='center' alignItems='center'>
                <img src={coin.image} alt='symbol' width={25} height={25} />
              </Grid>
              <Grid item xs={2} display='flex' justifyContent='start' alignItems='center'>
                <Typography textTransform='uppercase'>{coin.symbol}</Typography>
              </Grid>
              <Grid item xs={4.5} display='flex' justifyContent='end' alignItems='center'>
                <Typography>
                  {coin.current_price?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </Typography>
              </Grid>
              <Grid item xs={2.5} display='flex' justifyContent='center'>
                <IconButton onClick={() => handleAddCoin(coin.id)}>
                  <AddBoxIcon color="success" />
                </IconButton>
              </Grid>
            </Grid>
            <Divider />
          </Box>
        </div>
      )
    }
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: sm ? 320 : 350,
    bgcolor: 'background.default',
    borderRadius: '10px',
    boxShadow: 24,
    border: '2px solid',
    borderColor: colors.grey[500],
    p: 2,
  };

  return (
    <Modal
      open={isOpenAddCoin}
      onClose={toggleModalAddCoin}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <HeaderSearch title="All Currencys" setSearch={setSearch} />
        <Header />
        <Divider />
        {searchCoins &&
          <FixedSizeList height={400} width='100%' itemCount={searchCoins.length} itemSize={50}>
            {rowListCrytos}
          </FixedSizeList>
        }
      </Box>
    </Modal>
  );
}

export default AddCoinModal;