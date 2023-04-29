import { use } from "react"

import AdCard from "@components/Card/AdCard"

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
              <AdCard
                key={automobile.id}
                automobile={automobile}
                isEditable={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
