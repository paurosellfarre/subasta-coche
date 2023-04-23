import { prisma } from "@utils/prisma"
import { Prisma } from "@prisma/client"

export default async function handler(
  automobileId: number
): Promise<Prisma.BidGetPayload<Prisma.BidFindUniqueOrThrowArgs>> {
  const bid = await prisma.bid.findMany({
    where: {
      automobileId,
    },
    orderBy: {
      amount: "desc",
    },
    take: 1,
  })

  return bid[0]
}
