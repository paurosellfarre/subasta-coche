import { use } from "react"

import { ADS_PER_PAGE } from "../../constants"
import AdCard from "@components/Card/AdCard"
import PaginationButtons from "@components/Button/PaginationButtons"

import fetchAllAutomobiles from "@api/automobile/fetch-All-Automobiles"

export default function AutomobileAdsGrid({
  title,
  page,
}: {
  title?: string
  page: number
}) {
  const skip = page > 1 ? (page - 1) * ADS_PER_PAGE : undefined
  const ads = use(fetchAllAutomobiles(skip, ADS_PER_PAGE))

  return (
    <section>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {title ? (
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
              {title}
            </h2>
          ) : null}
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {ads.map((automobile) => (
              <AdCard
                key={automobile.id}
                automobile={automobile}
              />
            ))}
          </div>
        </div>
        <PaginationButtons
          currentPage={page}
          route="/anuncios"
          disableNextPage={ads.length < ADS_PER_PAGE}
        />
      </div>
    </section>
  )
}
