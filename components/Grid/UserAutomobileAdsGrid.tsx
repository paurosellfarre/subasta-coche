import { use } from "react"
import Link from "next/link"

import AdCard from "@components/Card/AdCard"
import DeleteButton from "@components/Button/DeleteButton"

import getSession from "@utils/session"

import fetchUserAutomobiles from "@api/automobile/fetch-User-Automobiles"

export default function AutomobileAdsGrid() {
  const session = use(getSession())
  const ads = use(fetchUserAutomobiles(session?.user.id as number))

  return (
    <section>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-4 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {ads.map((automobile) => (
              <div>
                <AdCard
                  key={automobile.id}
                  automobile={automobile}
                />
                <div className="flex justify-evenly mt-2">
                  <DeleteButton
                    href={`/automobile/${automobile.id}`}
                    className="block bg-red-500 text-white px-2 py-2 rounded text-sm font-medium text-center"
                    text={`Eliminar ${automobile.make} ${automobile.model}`}
                  />
                  <Link
                    href={`/anuncios/${automobile.id}/editar`}
                    className="block bg-gray-600 text-white px-2 py-2 rounded text-sm font-medium text-center"
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
