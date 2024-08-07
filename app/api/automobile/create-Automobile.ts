import { prisma } from "@utils/prisma"
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
        kilometers: Number(automobileData.kilometers),
        color: automobileData.color,
        autoType: automobileData.autoType,
        fuelType: automobileData.fuelType,
        offerType: automobileData.offerType,
        salePrice: Number(automobileData?.salePrice),
        auction_start:
          automobileData.offerType === "auction" ? new Date() : null,
        auction_end:
          automobileData.offerType === "auction"
            ? new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
            : null,
        user: automobileData.user,
        images: automobileData.images,
      },
    })
    return result
  } catch (err) {
    return false
  }
}
