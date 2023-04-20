import { prisma } from "@utils/prisma"
import { Prisma } from "@prisma/client"

import fetchAutomobile from "../automobile/[id]/fetch-Automobile"

export default async function handler(bidData: Prisma.BidCreateInput) {
  if (
    !bidData.amount ||
    !bidData.user.connect ||
    !bidData.automobile.connect?.id
  ) {
    return false
  }

  try {
    //Check if the automobile auction is active
    const { auction_start, auction_end } = await fetchAutomobile(
      bidData.automobile.connect.id
    )
    const now = new Date()

    if (
      !auction_start ||
      !auction_end ||
      now < auction_start ||
      now > auction_end
    ) {
      return false
    }

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
