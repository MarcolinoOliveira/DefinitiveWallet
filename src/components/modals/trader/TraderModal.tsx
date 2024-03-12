'use client'

import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { TraderModalProps, traderProps } from "@/@types/types";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { addCoinTrader } from "@/firebase/addDoc";
import DateInput from "./traderComponents/DateInput";
import CoinPriceInput from "./traderComponents/CoinPriceInput";
import CryptosInput from "./traderComponents/CryptosInput";
import ValueInput from "./traderComponents/ValueInput";
import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { useSetAlertBar } from "@/hooks/useAlertBar";
import { useModalsWallet } from "@/hooks/useModalsWallet";


const TraderModal = ({ coin, status }: TraderModalProps) => {

  const [trader, setTrader] = useState<traderProps>({
    date: '',
    priceCoin: '',
    value: '',
    cryptos: '',
  })

  const { sm } = useMediaQueryAdapted()
  const { data: session } = useSession()
  const { mode } = useThemeMode()
  const { isOpenTrader, toggleModalTrader } = useModalsWallet()
  const { setAlert } = useSetAlertBar()

  const colors = tokens(mode)
  const email = session?.user?.email

  const handlerCloseModal = () => {
    toggleModalTrader()
    setTrader({ date: '', priceCoin: '', value: '', cryptos: '', })
  }

  const handleCoinTrader = async () => {
    if (parseFloat(trader.cryptos) === 0) {
      setAlert({ open: true, textAlert: 'invalid value', severity: 'error' })
    }
    else if (trader.date === '' || trader.priceCoin === '' || trader.value === '' || trader.cryptos === '') {
      setAlert({ open: true, textAlert: 'Fill in All Fields', severity: "error" })
    }
    else if (parseFloat(trader.cryptos) > coin.cryptos && status === 'sell') {
      setAlert({ open: true, textAlert: 'You Don`t have that value', severity: 'error' })
    }
    else if (email) {
      await addCoinTrader({ email, trader, status, coin })
      toggleModalTrader()
      setAlert({
        open: true,
        textAlert: status === 'buy' ? 'Purchase made successfull' : 'Successfull sale',
        severity: "success"
      })
      setTrader({ date: '', priceCoin: '', value: '', cryptos: '', })
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
      open={isOpenTrader}
      onClose={handlerCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container direction='column' spacing={3}>
          <Grid item display='flex' justifyContent='center' alignItems='center'>
            {status === 'buy' && <Typography>New contribution</Typography>}
            {status === 'sell' && <Typography>New sale</Typography>}
          </Grid>
          <Grid item>
            <DateInput trader={trader} setTrader={setTrader} />
          </Grid>
          <Grid item>
            <CoinPriceInput trader={trader} setTrader={setTrader} />
          </Grid>
          <Grid item>
            <ValueInput trader={trader} setTrader={setTrader} status={status} />
          </Grid>
          <Grid item>
            <CryptosInput trader={trader} setTrader={setTrader} image={coin.imageSmall} status={status} cryptos={coin.cryptos} />
          </Grid>
          <Grid item>
            <Button onClick={handleCoinTrader} variant="contained" fullWidth>
              {status === 'buy' && <Typography textTransform="capitalize" sx={{ fontWeight: 500 }}>Buy {coin.name}</Typography>}
              {status === 'sell' && <Typography textTransform="capitalize" sx={{ fontWeight: 500 }}>Sell {coin.name}</Typography>}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default TraderModal;