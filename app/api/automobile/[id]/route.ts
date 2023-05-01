import { getToken } from "next-auth/jwt"
import { type NextRequest } from "next/server"

import fetchAutomobile from "./fetch-Automobile"
import deleteAutomobile from "./delete-Automobile"

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const id = context.params.id

  if (!id) {
    return new Response(JSON.stringify({ error: "No ad id provided" }), {
      status: 403,
    })
  }

  const response = await fetchAutomobile(Number(id))

  if (!response) {
    return new Response(JSON.stringify({ error: "Error has occured" }), {
      status: 403,
    })
  }
  return new Response(JSON.stringify(response), {
    status: 200,
  })
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const id = context.params.id

  //Authentication to check if the user is the owner of the ad
  const token = await getToken({ req: request })

  if (!id || !token) {
    return new Response(JSON.stringify({ error: "No ad id provided" }), {
      status: 403,
    })
  }

  const response = await deleteAutomobile(Number(id), Number(token.sub))

  if (!response) {
    return new Response(JSON.stringify({ error: "Error has occured" }), {
      status: 403,
    })
  }
  return new Response(JSON.stringify(response), {
    status: 200,
  })
}
