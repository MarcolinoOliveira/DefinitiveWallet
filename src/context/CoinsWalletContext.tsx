'use client'

import { coinsWalletProps, traderCoinProps } from "@/@types/types"
import { createContext } from "use-context-selector"
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';

type CoinsWalletContext = {
  coinsWallet: coinsWalletProps[]
  tradingsWallet: traderCoinProps[]
  setCoinsWallet: Dispatch<SetStateAction<coinsWalletProps[]>>
  setTradingsWallet: Dispatch<SetStateAction<traderCoinProps[]>>
}

const CoinsWalletContext = createContext({} as CoinsWalletContext)

export const CoinsWalletProvider = ({ children }: { children: ReactNode }) => {
  const [coinsWallet, setCoinsWallet] = useState<coinsWalletProps[]>([])
  const [tradingsWallet, setTradingsWallet] = useState<traderCoinProps[]>([])

  return (
    <CoinsWalletContext.Provider value={{ coinsWallet, tradingsWallet, setCoinsWallet, setTradingsWallet }}>
      {children}
    </CoinsWalletContext.Provider>
  )
}

export default CoinsWalletContext