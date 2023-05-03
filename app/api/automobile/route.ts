import createAutomobile from "./create-Automobile"

import { getToken } from "next-auth/jwt"
import { type NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()

  //Get user ID from token received and save it in the body
  const token = await getToken({ req: request })
  if (!token) {
    return new Response(JSON.stringify({ error: "Error has occured" }), {
      status: 403,
    })
  }
  body.user.connect.id = Number(token.sub)

  const response = await createAutomobile(body)

  if (!response) {
    return new Response(JSON.stringify({ error: "Error has occured" }), {
      status: 403,
    })
  }
  return new Response(JSON.stringify(response), {
    status: 200,
  })
}
