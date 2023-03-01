import prisma from "@utils/prisma"
import { Prisma } from "@prisma/client"

export default async function handler(
  automobileData: Prisma.AutomobileCreateInput
) {
  //Delete automobileData.images.create where binaryFile is null
  if (automobileData?.images) {
    // @ts-ignore
    automobileData.images.create = automobileData.images.create?.filter(
      (image: any) => image.binaryFile !== null
    )
  }

  try {
    const result = await prisma.automobile.create({
      data: {
        description: automobileData.description,
        make: automobileData.make,
        model: automobileData.model,
        year: Number(automobileData.year),
        kilometers: automobileData.kilometers,
        color: automobileData.color,
        autoType: automobileData.autoType,
        fuelType: automobileData.fuelType,
        offerType: automobileData.offerType,
        salePrice: Number(automobileData?.salePrice),
        user: automobileData.user,
        images: automobileData.images,
      },
    })
    return result
  } catch (err) {
    console.log(err)
    return false
  }
}
