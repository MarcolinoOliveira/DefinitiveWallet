import { db } from "@/libs/firebase"
import axios from "axios"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"
import { CoinTraderProps, addCoinWalletProps } from "./types"

export async function addCoinWallet({ id, email }: addCoinWalletProps) {

  if (id && email) {
    const docRef = doc(db, email, 'Currencys', 'CoinsWallet', id)

    const { data } = await axios.get(`/api/dynamicApi/${id}`)
    const resp = await data.data

    const payload = {
      avaregePrice: 0,
      contributed: 0,
      cryptos: 0,
      id: resp.id,
      marketCapRank: resp.market_cap_rank,
      symbol: resp.symbol,
      name: resp.name,
      imageSmall: resp.image.small,
      imageLarge: resp.image.large,
      priceUsd: resp.market_data.current_price.usd,
      historicalValue: resp.market_data.ath.usd,
    }

    await setDoc(docRef, payload)
  }
}

export async function addCoinTrader({ email, trader, status, coin }: CoinTraderProps) {

  if (email) {

    const docRefTradings = collection(db, `${email}/Tradings/Traders`)

    const payloadTrader = {
      name: coin.name,
      image: coin.imageSmall,
      symbol: coin.symbol,
      status: status,
      date: trader.date,
      value: parseFloat(trader.value.replace(",", "")),
      priceCoin: parseFloat(trader.priceCoin.replace(",", "")),
      cryptos: parseFloat(trader.cryptos),
      priceUsd: coin.priceUsd
    }

    await addDoc(docRefTradings, payloadTrader)
  }
}