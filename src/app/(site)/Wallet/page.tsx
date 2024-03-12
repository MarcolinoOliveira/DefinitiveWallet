import MyWallet from "@/components/wallet/MyWallet";
import { getUserServerSession } from "@/libs/serverSession";
import { redirect } from "next/navigation";

const Wallet = async () => {

  const { email } = await getUserServerSession()

  if (!email) redirect('/')

  return (
    <>
      <MyWallet />
    </>
  );
}

export default Wallet;