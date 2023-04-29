// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { prisma } from "@utils/prisma"

export default async function handler(userId: number) {
  //find user automobiles with images and bids
  const automobiles = await prisma.automobile.findMany({
    where: {
      userId: Number(userId),
      deletedAt: null,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      images: true,
    },
  })

  return automobiles
}
