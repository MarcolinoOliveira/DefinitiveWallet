import { coinsWalletProps, traderCoinProps, traderProps } from "@/@types/types"
import { DocumentData } from "firebase/firestore"
import { Dispatch, SetStateAction } from "react"

export type addCoinWalletProps = {
  id: string
  email: string
}

export type snapshotCoinsWalletProps = {
  email: string
  setCoinsWallet: Dispatch<SetStateAction<coinsWalletProps[]>>
}

export type CoinTraderProps = {
  email: string
  status: string
  trader: traderProps
  coin: coinsWalletProps
}

export type snapshotDashboardDataProps = {
  email: string
  setDashboardData: Dispatch<SetStateAction<DocumentData>>
}

export type snapshotAllTraders = {
  email: string
  setTradingsWallet: Dispatch<SetStateAction<traderCoinProps[]>>
}

export type updatePriceUsdProps = {
  id: string
  email: string
  priceUsd: number
  historicalValue: number
}

export type updateCurrencysProps = {
  id: string
  email: string | null | undefined
  totalContribution: number
  totalSellings: number
  contribution: number
  cryptos: number
  avaregePrice: number
  balance: number
}

export type updateTradingsProps = {
  id: string
  email: string
  priceUsd: number
}

export type updateDashboardProps = {
  email: string | null | undefined
  balance: number
  contributed: number
  totalContributed: number
  totalSellings: number
  coins: number
}

export type deleteDocProps = {
  email: string | undefined | null
  id: string | undefined
}