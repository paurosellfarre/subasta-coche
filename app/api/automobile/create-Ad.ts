import prisma from "@utils/prisma"
import { Prisma } from "@prisma/client"

export default async function handler(
  automobileData: Prisma.AutomobileCreateInput
) {
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
      },
    })
    return result
  } catch (err) {
    console.log(err)
    return false
  }
}
