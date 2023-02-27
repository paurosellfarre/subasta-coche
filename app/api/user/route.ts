import createUser from "./create-User"

import { type NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()
  const response = await createUser(body)

  if (!response) {
    return new Response(JSON.stringify({ error: "Error has occured" }), {
      status: 403,
    })
  }
  return new Response(JSON.stringify(response), {
    status: 200,
  })
}
