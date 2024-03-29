'use client'

import useSWR from "swr"
import axios from "axios"
import { createContext } from "react"
import { allCoinsProps } from "@/@types/types"

type allCoinsContextProps = {
  data?: allCoinsProps[]
}

const ApiContext = createContext({} as allCoinsContextProps)

export const ApiContextProvider = ({ children }: { children: React.ReactNode }) => {

  const fetcher = async (url: string) => {
    const { data } = await axios.get(url)
    return data.data
  }

  const { data } = useSWR<allCoinsProps[]>('/api/coinGeckoApi', fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false,
    refreshWhenHidden: true
  })

  return (
    <ApiContext.Provider value={{ data }}>
      {children}
    </ApiContext.Provider>
  )
}

export default ApiContext