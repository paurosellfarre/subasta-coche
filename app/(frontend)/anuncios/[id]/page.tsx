import { use } from "react"

import AutomobileImages from "@components/Gallery/AutomobileImages"
import AutomobileTitle from "@components/Title/AutomobileTitle"
import FeaturesGrid from "@components/Grid/FeaturesGrid"
import AuctionRightBar from "@components/Auction/AuctionRightBar"
import ContactCard from "@components/Card/ContactCard"

import fetchAutomobile from "@api/automobile/[id]/fetch-Automobile"

export default function Anuncio({ params }: { params: { id: string } }) {
  const automobile = use(fetchAutomobile(Number(params.id)))

  return (
    <div>
      <AutomobileTitle title={`${automobile?.make} ${automobile?.model}`} />

      <div className="px-4 pt-8 pb-16 sm:px-6 sm:grid sm:max-w-7xl sm:grid-cols-3 sm:grid-rows-[auto,auto,1fr] sm:gap-x-8 sm:px-8 sm:pt-10 sm:pb-2">
        {/* Images Gallery */}
        <AutomobileImages images={automobile?.images} />

        {/* Auction Clock and Bidder */}
        {automobile.offerType === "auction" && (
          <div className="mt-4 sm:mt-0">
            <AuctionRightBar
              automobileId={automobile.id}
              start={automobile.auction_start}
              end={automobile.auction_end}
            />
          </div>
        )}

        <div className="mt-4 sm:col-span-2">
          {/* Features */}
          <div className="pt-5">
            <h2 className="text-xl font-bold text-gray-900 text-center">
              ⚙️ Detalles Técnicos
            </h2>
            <FeaturesGrid
              make={automobile.make}
              model={automobile.model}
              kilometers={automobile.kilometers}
              year={automobile.year}
              color={automobile.color}
              fuelType={automobile.fuelType}
              transmission={automobile.transmission}
              doors={automobile.doors}
              seats={automobile.seats}
              cc={automobile.cc}
              cv={automobile.cv}
              autoType={automobile.autoType}
              salePrice={automobile.salePrice}
            />
          </div>
          {/* Description */}
          <div className="mt-4 pt-5">
            <h2 className="text-xl font-bold text-gray-900 text-center">
              Descripción
            </h2>
            <p className="ml-12 text-base text-gray-900">
              {automobile.description}
            </p>
          </div>
        </div>

        {/* User Contact Info */}
        <div
          className={`mt-4 sm:mt-0 ${
            automobile.offerType !== "auction" && "row-start-1"
          } `}
        >
          <ContactCard id={Number(automobile.userId)} />
        </div>
      </div>
    </div>
  )
}
