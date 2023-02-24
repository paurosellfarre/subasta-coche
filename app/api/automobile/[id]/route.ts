import fetchAutomobile from "./fetch-Automobile"

export async function GET(request: Response) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  const response = await fetchAutomobile()

  return new Response(JSON.stringify(response), {
    status: 200,
  })
}
