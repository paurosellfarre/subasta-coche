import prisma from "../../../lib/prisma"

interface VehicleData {
  description: string
  make: string
  model: string
  year: number
  kilometers: number
  color: string
  auctions: {}
  images: {}
}

export default async function handler(vehicleData: VehicleData) {
  try {
    const result = await prisma.vehicle.create({
      data: {
        description: vehicleData.description,
        make: vehicleData.make,
        model: vehicleData.model,
        year: Number(vehicleData.year),
        kilometers: vehicleData.kilometers,
        color: vehicleData.color,
        auctions: vehicleData.auctions,
        images: vehicleData.images,
      },
    })
    return result
  } catch (err) {
    console.log(err)
    return false
  }
}
