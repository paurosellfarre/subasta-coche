// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { prisma } from "@utils/prisma"

export default async function handler(id: number, userId: number) {
  //find user automobile by id and user id

  const automobile = await prisma.automobile.findFirst({
    where: {
      id: id,
      userId: userId,
      deletedAt: null,
    },
  })

  return automobile
}
