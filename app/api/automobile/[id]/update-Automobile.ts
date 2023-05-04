import { prisma } from "@utils/prisma"
import { Prisma } from "@prisma/client"

export default async function handler(
  id: number,
  automobileData: Prisma.AutomobileUpdateInput
) {
  //Delete automobileData.images.create where binaryFile is null
  if (automobileData?.images) {
    // @ts-ignore
    automobileData.images.create = automobileData.images.create?.filter(
      (image: any) => image.binaryFile !== null
    )
  }

  //Use updateMany to allow for multiple where inputs.
  //Always should return 1 as we filter by automobile id
  const automobile = await prisma.automobile.update({
    where: {
      id: id,
    },
    data: {
      description: automobileData.description,
      make: automobileData.make,
      model: automobileData.model,
      year: Number(automobileData.year),
      kilometers: Number(automobileData.kilometers),
      color: automobileData.color,
      autoType: automobileData.autoType,
      fuelType: automobileData.fuelType,
      offerType: automobileData.offerType,
      salePrice: Number(automobileData?.salePrice),
      user: automobileData.user,
      // Delete all images of the automobile and create new ones
      images: {
        deleteMany: {
          automobileId: id,
        },
        create: automobileData.images?.create,
      },
    },
  })

  return automobile
}
