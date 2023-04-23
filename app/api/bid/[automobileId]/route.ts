import fetchBid from "./fetch-Bid"

import { type NextRequest } from "next/server"

export async function GET(
  request: NextRequest,
  context: { params: { automobileId: number } }
) {
  const automobileId = context.params.automobileId

  if (!automobileId) {
    return new Response(JSON.stringify({ error: "No automobileId provided" }), {
      status: 403,
    })
  }

  const response = await fetchBid(Number(automobileId))

  if (!response) {
    return new Response(JSON.stringify({ error: "Error has occured" }), {
      status: 403,
    })
  }
  return new Response(JSON.stringify(response), {
    status: 200,
  })
}
