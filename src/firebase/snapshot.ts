import { coinsWalletProps, traderCoinProps } from "@/@types/types";
import { db } from "@/libs/firebase";
import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import { snapshotDashboardDataProps, snapshotCoinsWalletProps, snapshotAllTraders } from "./types";


export function snapshotCoinsWallet({ email, setCoinsWallet }: snapshotCoinsWalletProps) {

  if (email) {
    const ref = collection(db, `${email}/Currencys/CoinsWallet`)

    onSnapshot(query(ref), (snapshot) => {
      const dataCoins = snapshot.docs.map((doc) => ({ ...doc.data() as coinsWalletProps }))
      setCoinsWallet(dataCoins)
    })
  }
}

export async function snapshotDashboardData({ email, setDashboardData }: snapshotDashboardDataProps) {

  if (email) {
    const docRef = doc(db, email, 'Currencys')
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const data = docSnap.data()
      setDashboardData(data)
    }
  }
}

export function snapshotAllTraders({ email, setTradingsWallet }: snapshotAllTraders) {

  if (email) {
    const docRefTraders = collection(db, `${email}/Tradings/Traders`)

    onSnapshot(query(docRefTraders), (snapshot) => {
      const dataCoins = snapshot.docs.map((doc) => ({ ...doc.data() as traderCoinProps, id: doc.id }))
      setTradingsWallet(dataCoins)
    })
  }
}