import createUser from "./create-User"
import updateUser from "./update-User"

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

export async function PUT(request: NextRequest) {
  const body = await request.json()
  const response = await updateUser(body)

  if (!response) {
    return new Response(JSON.stringify({ error: "Error has occured" }), {
      status: 403,
    })
  }
  return new Response(JSON.stringify(response), {
    status: 200,
  })
}
