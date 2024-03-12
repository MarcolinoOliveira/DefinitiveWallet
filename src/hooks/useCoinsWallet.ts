'use client'

import CoinsWalletContext from "@/context/CoinsWalletContext"
import { useContextSelector } from "use-context-selector"

export const useCoinsWallet = () => {
  const coinsWallet = useContextSelector(CoinsWalletContext, toggle => toggle.coinsWallet)

  return {
    coinsWallet
  }
}

export const useTradingsWallet = () => {
  const tradingsWallet = useContextSelector(CoinsWalletContext, toggle => toggle.tradingsWallet)

  return {
    tradingsWallet
  }
}

export const useSetCoinsWallet = () => {
  const setCoinsWallet = useContextSelector(CoinsWalletContext, toggle => toggle.setCoinsWallet)

  return {
    setCoinsWallet
  }
}

export const useSetTradingsWallet = () => {
  const setTradingsWallet = useContextSelector(CoinsWalletContext, toggle => toggle.setTradingsWallet)

  return {
    setTradingsWallet
  }
}
