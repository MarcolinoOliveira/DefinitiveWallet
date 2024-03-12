'use client'

import { traderCoinProps } from "@/@types/types";
import { Trader } from "@/components/trading/traders";
import { useModalsWallet } from "@/hooks/useModalsWallet";
import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Box, Modal, Typography, styled } from "@mui/material";

type DetailsModalTrader = {
  trader: traderCoinProps
}

const DetailsModalTrader = ({ trader }: DetailsModalTrader) => {

  const { isOpenDetailsTrader, toggleModalDetailsTrader } = useModalsWallet()
  const { mode } = useThemeMode()

  const colors = tokens(mode)

  const CustomTypography = styled(Typography)(() => ({
    variant: 'body2',
    fontWeight: 500,
    color: colors.indigo[500],
  }))

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 320,
    bgcolor: 'background.default',
    borderRadius: '10px',
    boxShadow: 24,
    border: '2px solid',
    borderColor: colors.indigo[500],
    p: 2,
  };

  return (
    <Modal
      open={isOpenDetailsTrader}
      onClose={toggleModalDetailsTrader}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} display='flex' flexDirection='column' gap={2}>
        <Box display='flex' gap={2} height={50} justifyContent='center' alignItems='center'>
          <Trader.Image image={trader.image} />
          <Trader.Name name={trader.name} symbol={trader.symbol} />
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <CustomTypography>Type:</CustomTypography>
          <Trader.Status status={trader.status} />
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <CustomTypography>Date:</CustomTypography>
          <Trader.Date date={trader.date} />
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <CustomTypography>Share price:</CustomTypography>
          <Trader.PriceCoin priceCoin={trader.priceCoin} />
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <CustomTypography>Amount:</CustomTypography>
          <Trader.Value value={trader.value} />
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <CustomTypography>Cryptos:</CustomTypography>
          <Trader.Cryptos cryptos={trader.cryptos} />
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <CustomTypography>Profit:</CustomTypography>
          <Trader.Profit item={trader} />
        </Box>
      </Box>
    </Modal>
  );
}

export default DetailsModalTrader;