// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

//import prisma from "../../lib/prisma"

import vehicle from "../../data/vehicle.json"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //const users = await prisma.user.findMany()
  res.status(200).json(vehicle)
}
