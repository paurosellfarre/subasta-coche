import { prisma } from "@utils/prisma"
import { Prisma } from "@prisma/client"

export default async function handler(
  id: number
): Promise<
  Prisma.AutomobileGetPayload<Prisma.AutomobileFindUniqueOrThrowArgs>
> {
  //Soft delete automobile by setting deletedAt to current date
  const automobile = await prisma.automobile.update({
    where: {
      id: id,
    },
    data: {
      deletedAt: new Date(),
    },
  })

  return automobile
}
