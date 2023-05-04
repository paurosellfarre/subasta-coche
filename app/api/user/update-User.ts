import { prisma } from "@utils/prisma"
import { Prisma } from "@prisma/client"

import getSession from "@utils/session"

export default async function handler(userData: Prisma.UserUpdateInput) {
  try {
    const session = await getSession()
    if (!session) return false

    const result = await prisma.user.update({
      where: {
        id: session.user.id as number,
      },
      data: userData,
    })
    return result
  } catch (err) {
    return false
  }
}
