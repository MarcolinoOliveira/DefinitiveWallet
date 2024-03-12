'use client'

import { useState, useCallback, ReactNode } from "react"
import { createContext } from "use-context-selector"

type ActionsContextProps = {
  isCollapsed: boolean
  isOpenSignIn: boolean
  isOpenAddCoin: boolean
  isOpenTrader: boolean
  isOpenDetailsWallet: boolean
  isOpenDetailsTrader: boolean
  toggleSideBar: () => void
  toggleModalSignIn: () => void
  toggleModalAddCoin: () => void
  toggleModalTrader: () => void
  toggleModalDetailsWallet: () => void
  toggleModalDetailsTrader: () => void
}

const ActionsContext = createContext({} as ActionsContextProps)

export const ActionsProvider = ({ children }: { children: ReactNode }) => {

  const [isCollapsed, setCollapsed] = useState(false)
  const [isOpenSignIn, setIsOpenSignIn] = useState(false)
  const [isOpenAddCoin, setIsOpenAddCoin] = useState(false)
  const [isOpenTrader, setIsOpenTrader] = useState(false)
  const [isOpenDetailsWallet, setIsOpenDetailsWallet] = useState(false)
  const [isOpenDetailsTrader, setIsOpenDetailsTrader] = useState(false)

  const toggleSideBar = useCallback(() => {
    setCollapsed(prev => !prev)
  }, [])

  const toggleModalSignIn = useCallback(() => {
    setIsOpenSignIn(prev => !prev)
  }, [])

  const toggleModalAddCoin = useCallback(() => {
    setIsOpenAddCoin(prev => !prev)
  }, [])

  const toggleModalTrader = useCallback(() => {
    setIsOpenTrader(prev => !prev)
  }, [])

  const toggleModalDetailsWallet = useCallback(() => {
    setIsOpenDetailsWallet(prev => !prev)
  }, [])

  const toggleModalDetailsTrader = useCallback(() => {
    setIsOpenDetailsTrader(prev => !prev)
  }, [])

  return (
    <ActionsContext.Provider
      value={{
        isCollapsed,
        isOpenSignIn,
        isOpenAddCoin,
        isOpenTrader,
        isOpenDetailsWallet,
        isOpenDetailsTrader,
        toggleSideBar,
        toggleModalSignIn,
        toggleModalAddCoin,
        toggleModalTrader,
        toggleModalDetailsWallet,
        toggleModalDetailsTrader,
      }}
    >
      {children}
    </ActionsContext.Provider>
  )
}

export default ActionsContext