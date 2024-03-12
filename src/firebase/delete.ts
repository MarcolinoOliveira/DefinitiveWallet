import { db } from "@/libs/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteDocProps } from "./types";


export async function deleteCoinWallet({ email, id }: deleteDocProps) {

  if (email && id) {
    const docRef = doc(db, email, 'Currencys', 'CoinsWallet', id)

    await deleteDoc(docRef)
  }
}

export async function deleteCoinTrader({ email, id, }: deleteDocProps) {

  if (email && id) {
    const docRef = doc(db, email, 'Tradings', 'Traders', id)

    await deleteDoc(docRef)
  }
}