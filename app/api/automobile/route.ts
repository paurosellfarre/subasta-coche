import createAd from "./create-Ad"
import fetchAllAutomobiles from "./fetch-All-Automobiles"

import { type NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()

  const response = await createAd(body)

  if (!response) {
    return new Response(JSON.stringify({ error: "Error has occured" }), {
      status: 403,
    })
  }
  return new Response(JSON.stringify(response), {
    status: 200,
  })
}

export async function GET(request: NextRequest) {
  const response = await fetchAllAutomobiles()

  if (!response) {
    return new Response(JSON.stringify({ error: "Error has occured" }), {
      status: 403,
    })
  }
  return new Response(JSON.stringify(response), {
    status: 200,
  })
}
