// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

import prisma from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { brand, model, year, color } = JSON.parse(req.body)

    try {
      const result = await prisma.vehicle.create({
        data: {
          description: "description",
          make: brand,
          model: model,
          year: Number(year),
          kilometers: 0,
          color: color,
          auctions: {},
          images: {},
        },
      })
      res.status(200).json(result)
    } catch (err) {
      console.log(err)
      res.status(403).json({ err: "Error has occured while making a post" })
    }
  }
}
