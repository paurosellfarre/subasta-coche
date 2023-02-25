import fetchAutomobile from "./fetch-Automobile"

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
