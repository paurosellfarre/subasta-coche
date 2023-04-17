// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { prisma } from "@utils/prisma"
import { Prisma } from "@prisma/client"

export default async function handler(
  id: number
): Promise<
  Prisma.AutomobileGetPayload<Prisma.AutomobileFindUniqueOrThrowArgs>
> {
  //find automobile with images and auctions
  const automobile = await prisma.automobile.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      images: true,
      auctions: true,
    },
  })

  return automobile
}
