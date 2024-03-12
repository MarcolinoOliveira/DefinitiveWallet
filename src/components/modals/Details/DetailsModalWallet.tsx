'use client'

import { coinsWalletProps } from "@/@types/types";
import CurrencyDetails from "@/components/wallet/CurrencyDetails";
import CurrencyBalance from "@/components/wallet/currencys/CurrencyBalance";
import CurrencyHeader from "@/components/wallet/currencys/CurrencyHeader";
import { useModalsWallet } from "@/hooks/useModalsWallet";
import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Box, Modal } from "@mui/material";

type DetailsModalWallet = {
  coin: coinsWalletProps
}

const DetailsModalWallet = ({ coin }: DetailsModalWallet) => {

  const { isOpenDetailsWallet, toggleModalDetailsWallet } = useModalsWallet()
  const { mode } = useThemeMode()

  const colors = tokens(mode)

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
    borderColor: colors.grey[500],
    p: 2,
  };

  return (
    <Modal
      open={isOpenDetailsWallet}
      onClose={toggleModalDetailsWallet}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} display='flex' flexDirection='column' gap={2}>
        <CurrencyHeader coin={coin} />
        <CurrencyBalance balance={coin.balance} />
        <CurrencyDetails coin={coin} />
      </Box>
    </Modal>
  );
}

export default DetailsModalWallet;