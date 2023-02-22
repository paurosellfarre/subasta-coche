// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../lib/prisma"

import vehicle from "../../data/vehicle.json"

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof vehicle>
) {
  const users = await prisma.user.findMany()
  res.status(200).json(vehicle)
}
