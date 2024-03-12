import { doc, setDoc, updateDoc } from "firebase/firestore";
import { updatePriceUsdProps, updateCurrencysProps, updateTradingsProps, updateDashboardProps } from "./types";
import { db } from "@/libs/firebase";

export async function updatePriceUsd({ id, email, priceUsd, historicalValue }: updatePriceUsdProps) {

  if (id && email) {
    try {
      const ref = doc(db, email, 'Currencys', 'CoinsWallet', id)
      const payload = {
        priceUsd: priceUsd,
        historicalValue: historicalValue
      }

      await updateDoc(ref, payload)

    } catch (error) {
      console.log(error)
    }
  }
}

type updateCurrency = {
  props: updateCurrencysProps
}

export async function updateCurrencys({ props }: updateCurrency) {

  if (props.id && props.email) {
    try {
      const ref = doc(db, props.email, 'Currencys', 'CoinsWallet', props.id)
      const payload = {
        totalContributed: props.totalContribution,
        totalSellings: props.totalSellings,
        contributed: props.contribution,
        cryptos: props.cryptos,
        avaregePrice: props.avaregePrice,
        balance: props.balance
      }

      await updateDoc(ref, payload)

    } catch (error) {
      console.log(error)
    }
  }
}

export async function updateTradings({ id, email, priceUsd }: updateTradingsProps) {
  if (id && email) {
    try {
      const ref = doc(db, email, 'Tradings', 'Traders', id)
      const payload = {
        priceUsd: priceUsd
      }

      await updateDoc(ref, payload)

    } catch (error) {
      console.log(error)
    }
  }
}

type updateDashboard = {
  props: updateDashboardProps
}

export async function updateDashboard({ props }: updateDashboard) {
  if (props.email) {
    try {
      const ref = doc(db, props.email, 'Currencys')
      const payload = {
        balance: props.balance,
        contributed: props.contributed,
        totalContributed: props.totalContributed,
        totalSellings: props.totalSellings,
        coins: props.coins
      }

      await setDoc(ref, payload)
    }
    catch (error) {
      console.log(error)
    }
  }
}