import Link from "next/link"
import { Automobile, Image } from "@prisma/client"

import AdCard from "@components/Card/AdCard"
import DeleteButton from "@components/Button/DeleteButton"

export default function UserAutomobileAdsGrid({
  ads,
}: {
  ads: (Automobile & {
    images: Image[]
  })[]
}) {
  return (
    <section>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-4 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-3 sm:grid-cols-2 xl:gap-x-8">
            {ads.map((automobile) => (
              <div key={automobile.id}>
                <AdCard automobile={automobile} />
                <div className="flex justify-evenly mt-2">
                  <DeleteButton
                    href={`/automobile/${automobile.id}`}
                    className="block bg-red-500 text-white px-2 py-2 rounded text-sm font-medium text-center truncate w-36"
                    text={`Eliminar ${automobile.make} ${automobile.model}`}
                  />
                  <Link
                    href={`/anuncios/${automobile.id}/editar`}
                    className="block bg-gray-600 text-white px-2 py-2 rounded text-sm font-medium text-center truncate w-36"
                  >
                    Editar {automobile.make} {automobile.model}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
