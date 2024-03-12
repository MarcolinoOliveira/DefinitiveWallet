'use client'

import { updateDashboard } from "@/firebase/updateDoc";
import { useCoinsWallet } from "@/hooks/useCoinsWallet";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const UpdateDashboard = () => {

  const { coinsWallet } = useCoinsWallet()
  const { data: session } = useSession()

  const email = session?.user?.email

  useEffect(() => {
    const balance = coinsWallet.reduce((accumulator, value) => {
      return accumulator + value.balance
    }, 0)
    const contributed = coinsWallet.reduce((accumulator, value) => {
      return accumulator + value.contributed
    }, 0)
    const totalContributed = coinsWallet.reduce((accumulator, value) => {
      return accumulator + value.totalContributed
    }, 0)
    const totalSellings = coinsWallet.reduce((accumulator, value) => {
      return accumulator + value.totalSellings
    }, 0)
    const coins = coinsWallet.reduce((accumulator, value) => {
      return accumulator + 1
    }, 0)

    const props = {
      email,
      balance,
      contributed,
      totalContributed,
      totalSellings,
      coins,
    }

    updateDashboard({ props })

  }, [coinsWallet, email])

  return (
    <></>
  );
}

export default UpdateDashboard;