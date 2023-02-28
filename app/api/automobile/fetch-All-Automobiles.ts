// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "@utils/prisma"
import { Prisma } from "@prisma/client"

export default async function handler(): Promise<
  Prisma.AutomobileGetPayload<{ include: { images: true; auctions: true } }>[]
> {
  //find automobiles with images and auctions
  const automobiles = await prisma.automobile.findMany({
    include: {
      images: true,
      auctions: true,
    },
  })

  return automobiles
}
