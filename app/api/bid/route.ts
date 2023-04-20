import createBid from "./create-Bid"

import { getToken } from "next-auth/jwt"
import { type NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const body = {
    user: { connect: { id: null } },
    ...(await request.json()),
  }

  //Get user ID from token received and save it in the body
  const token = await getToken({ req: request })
  body.user.connect.id = Number(token?.sub)

  const response = await createBid(body)

  if (!response) {
    return new Response(JSON.stringify({ error: "Error has occured" }), {
      status: 403,
    })
  }
  return new Response(JSON.stringify(response), {
    status: 200,
  })
}
