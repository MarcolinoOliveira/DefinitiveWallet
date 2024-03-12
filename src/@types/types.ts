import { AlertColor } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { FieldErrors, UseFormRegister } from "react-hook-form"

export type ModalSignInProps = {
  isOpen: boolean
  toggleModal: () => void
}

export type rowListCryptosProps = {
  index: number
  style: React.CSSProperties
}

export type FormDataProps = {
  name: string
  email: string
  password: string
  data: string
  price: string
  contributed: string
  cryptos: string
}

export type AlertBarProps = {
  open: boolean
  handleClose?: () => void
  textAlert: string
  severity: AlertColor
}

export type InputReactHookProps = {
  register: UseFormRegister<FormDataProps>
  errors: FieldErrors<FormDataProps>
  price?: number
}

export type CurrencysProps = {
  text?: string
  value?: number
  symbol?: string
}

export type allCoinsProps = {
  market_cap_rank: number
  id: string
  symbol: string
  name: string
  image: string
  current_price: number,
  price_change_percentage_24h: number
  market_cap: number
  ath: number
  high_24h: number
  low_24h: number
}

export type coinsWalletProps = {
  id: string
  name: string
  priceUsd: number
  cryptos: number
  imageSmall: string
  balance: number
  avaregePrice: number
  contributed: number
  symbol: string
  totalContributed: number
  totalSellings: number
}

export type traderProps = {
  date: string
  priceCoin: string
  value: string
  cryptos: string
}

export type BuyInputProps = {
  trader: traderProps,
  setTrader: Dispatch<SetStateAction<traderProps>>
  image?: string
  status?: string
  cryptos?: number
}

export type traderCoinProps = {
  id: string
  value: number
  cryptos: number
  date: string
  priceCoin: number
  status: string
  name: string
  symbol: string
  image: string
  priceUsd: number
}

export type TraderModalProps = {
  coin: coinsWalletProps
  status: string
}