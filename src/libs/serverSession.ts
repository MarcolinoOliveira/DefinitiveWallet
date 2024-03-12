import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

export async function getUserServerSession() {
  const session = await getServerSession(authOptions)

  const email = session?.user?.email
  const name = session?.user?.name

  return {
    email,
    name
  }
}