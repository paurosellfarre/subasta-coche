import { prisma } from "@utils/prisma"
import { Prisma } from "@prisma/client"

export default async function handler(
  id: number
): Promise<
  Prisma.AutomobileGetPayload<Prisma.AutomobileFindUniqueOrThrowArgs>
> {
  //find automobile with images and bids
  const automobile = await prisma.automobile.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      images: true,
    },
  })

  return automobile
}
