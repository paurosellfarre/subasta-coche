import { getToken } from "next-auth/jwt"
import { type NextRequest } from "next/server"

import updateAutomobile from "./update-Automobile"
import deleteAutomobile from "./delete-Automobile"
import fetchUserAutomobile from "./fetch-User-Automobile"

export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const id = context.params.id
  const body = await request.json()

  //Authentication to check if the user is the owner of the ad
  const token = await getToken({ req: request })

  if (!id || !token) {
    return new Response(JSON.stringify({ error: "No ad id provided" }), {
      status: 403,
    })
  }

  //Check if user has permission to update the automobile
  const userHasPermission = await fetchUserAutomobile(
    Number(id),
    Number(token.sub)
  )

  if (!userHasPermission) {
    return new Response(
      JSON.stringify({ error: "User does not have permission" }),
      {
        status: 403,
      }
    )
  }

  const response = await updateAutomobile(Number(id), body)

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
