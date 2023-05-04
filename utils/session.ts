import { getServerSession } from "next-auth/next"
import { authOptions } from "../pages/api/auth/[...nextauth]"

export default async () => {
  const session = getServerSession(authOptions)
  return session
}
