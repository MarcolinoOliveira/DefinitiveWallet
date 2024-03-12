import Tradings from "@/components/trading/Tradings";
import { getUserServerSession } from "@/libs/serverSession";
import { redirect } from "next/navigation";

const Trading = async () => {

  const { email } = await getUserServerSession()

  if (!email) redirect('/')

  return (
    <>
      <Tradings />
    </>
  );
}

export default Trading;