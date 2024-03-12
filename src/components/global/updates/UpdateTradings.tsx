'use client'

import { updateTradings } from "@/firebase/updateDoc";
import useApiData from "@/hooks/useApiData";
import { useTradingsWallet } from "@/hooks/useCoinsWallet";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const UpdateTradings = () => {

  const { data } = useApiData()
  const { tradingsWallet } = useTradingsWallet()
  const { data: session } = useSession()

  const email = session?.user?.email

  useEffect(() => {
    if (data && email) {
      for (let i = 0; i < tradingsWallet?.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (tradingsWallet[i].name === data[j].name) {
            updateTradings({
              id: tradingsWallet[i].id,
              email,
              priceUsd: data[j].current_price
            })
            break
          }
        }
      }
    }
  }, [data, tradingsWallet, email])

  return (
    <></>
  );
}

export default UpdateTradings;