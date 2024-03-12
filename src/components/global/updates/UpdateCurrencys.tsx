'use client'

import { updateCurrencys, updatePriceUsd } from "@/firebase/updateDoc";
import useApiData from "@/hooks/useApiData";
import { useCoinsWallet, useTradingsWallet } from "@/hooks/useCoinsWallet";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const UpdateCurrencys = () => {
  const { data } = useApiData()
  const { coinsWallet } = useCoinsWallet()
  const { tradingsWallet } = useTradingsWallet()
  const { data: session } = useSession()

  const email = session?.user?.email

  useEffect(() => {
    if (data && email) {
      for (let i = 0; i < coinsWallet.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (coinsWallet[i].name === data[j].name) {
            updatePriceUsd({
              id: data[j].id,
              email: email,
              priceUsd: data[j].current_price,
              historicalValue: data[j].ath
            })
            break
          }
        }
      }
    }
  }, [data, coinsWallet, email])

  useEffect(() => {
    for (let i = 0; i < coinsWallet?.length; i++) {
      const contributed = tradingsWallet.reduce((accumulator, value) => {
        if (value.name === coinsWallet[i].name && value.status === 'buy') {
          return accumulator + value.value
        }
        return accumulator
      }, 0)
      const sellings = tradingsWallet.reduce((accumulator, value) => {
        if (value.name === coinsWallet[i].name && value.status === 'sell') {
          return accumulator + value.value
        }
        return accumulator
      }, 0)
      const cryptosBuy = tradingsWallet.reduce((accumulator, value) => {
        if (value.name === coinsWallet[i].name && value.status === 'buy') {
          return accumulator + value.cryptos
        }
        return accumulator
      }, 0)
      const cryptosSell = tradingsWallet.reduce((accumulator, value) => {
        if (value.name === coinsWallet[i].name && value.status === 'sell') {
          return accumulator + value.cryptos
        }
        return accumulator
      }, 0)
      const sumPrice = tradingsWallet.reduce((accumulator, value) => {
        if (value.name === coinsWallet[i].name && value.status === 'buy') {
          return accumulator + value.priceCoin
        }
        return accumulator
      }, 0)
      const count = tradingsWallet.reduce((accumulator, value) => {
        if (value.name === coinsWallet[i].name && value.status === 'buy') {
          return accumulator + 1
        }
        return accumulator
      }, 0)

      const avaregePrice = count != 0 ? sumPrice / count : 0
      const balance = count != 0 ? (cryptosBuy - cryptosSell) * coinsWallet[i].priceUsd : 0
      const contribution = cryptosSell != 0 ? (cryptosBuy - cryptosSell) * avaregePrice : contributed
      const cryptos = cryptosBuy - cryptosSell
      const totalContribution = contributed
      const totalSellings = sellings

      const props = {
        id: coinsWallet[i].id,
        email,
        avaregePrice,
        balance,
        contribution,
        cryptos,
        totalContribution,
        totalSellings
      }

      updateCurrencys({ props })
    }
  }, [coinsWallet, tradingsWallet, email])

  return (
    <></>
  );
}

export default UpdateCurrencys;