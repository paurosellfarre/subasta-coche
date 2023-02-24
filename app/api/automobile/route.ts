import createAd from "./create-Ad"

import { type NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()

  const response = await createAd({
    description: "description",
    make: body.brand,
    model: body.model,
    year: body.year,
    kilometers: 0,
    color: body.color,
    auctions: {},
    images: {},
  })

  if (!response) {
    return new Response(JSON.stringify({ error: "Error has occured" }), {
      status: 403,
    })
  }
  return new Response(JSON.stringify(response), {
    status: 200,
  })
}
