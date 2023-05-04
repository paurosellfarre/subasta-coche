import { prisma } from "@utils/prisma"

export default async function handler(
  id: number,
  userId: number
) {
  //Soft delete automobile by setting deletedAt to current date, 
  //Use updateMany to allow for multiple where inputs.
  //Always should return 1 as we filter by automobile id
  
  const automobile = await prisma.automobile.updateMany({
    where: {
      id: Number(id),
      userId: Number(userId),
    },
    data: {
      deletedAt: new Date(),
    },

  })

  return automobile.count > 0

}
