import AdCard from "@components/Card/AdCard"
import { Prisma } from "@prisma/client"

async function fetchAllAutomobiles() {
  const automobiles = await fetch(process.env.PUBLIC_URL + "/api/automobile", {
    cache: "no-store",
  })
  return automobiles.json()
}

export default async function Home() {
  const automobiles = await fetchAllAutomobiles()

  return (
    <section>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
            Subastas de vehiculos a punto de terminar
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {automobiles.map(
              (
                automobile: Prisma.AutomobileGetPayload<{
                  include: { images: true }
                }>
              ) => (
                <AdCard
                  key={automobile.id}
                  automobile={automobile}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
