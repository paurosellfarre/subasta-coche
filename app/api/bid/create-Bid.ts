import { prisma } from "@utils/prisma"
import { Prisma } from "@prisma/client"

export default async function handler(bidData: Prisma.BidCreateInput) {
  if (!bidData.amount || !bidData.user.connect || !bidData.automobile.connect) {
    return false
  }

  try {
    const result = await prisma.bid.create({
      data: {
        amount: bidData.amount,
        user: {
          connect: {
            id: bidData.user.connect.id,
          },
        },
        automobile: {
          connect: {
            id: bidData.automobile.connect.id,
          },
        },
      },
    })

    return result
  } catch (err) {
    return false
  }
}
