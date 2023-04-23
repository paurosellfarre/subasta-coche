// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { prisma } from "@utils/prisma"
import { Prisma } from "@prisma/client"

export default async function handler(
  skip?: number,
  take?: number
): Promise<Prisma.AutomobileGetPayload<{ include: { images: true } }>[]> {
  //find automobiles with images and bids
  const automobiles = await prisma.automobile.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      images: true,
    },
    ...(skip && { skip }),
    ...(take && { take }),
  })

  return automobiles
}
