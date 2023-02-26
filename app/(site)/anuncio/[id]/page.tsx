import AutomobileImages from "../../../../components/Gallery/AutomobileImages"
import AutomobileTitle from "../../../../components/Title/AutomobileTitle"

async function fetchAutomobile() {
  const automobile = await fetch(process.env.PUBLIC_URL + "/api/automobile/1", {
    cache: "no-store",
  })
  return automobile.json()
}

export default async function Anuncio() {
  const automobile = await fetchAutomobile()

  return (
    <div>
      <AutomobileTitle title={`${automobile?.make} ${automobile?.model}`} />

      <div className="px-4 pt-8 pb-16 sm:px-6 sm:grid sm:max-w-7xl sm:grid-cols-3 sm:grid-rows-[auto,auto,1fr] sm:gap-x-8 sm:px-8 sm:pt-10 sm:pb-2">
        {/* Images Gallery */}
        <AutomobileImages images={automobile?.images} />

        {/* Auction Clock and Bidder */}
        <div className="mt-4 sm:row-span-3 sm:mt-0">
          <p className="text-base text-gray-900">Auction Clock</p>

          <div className="mt-6">
            <p className="text-base text-gray-900">Auction Bidder</p>
          </div>
        </div>

        <div className="mt-4 sm:col-span-2 sm:col-start-1 sm:border-r sm:border-gray-200 sm:pt-6 sm:pb-16 sm:pr-8">
          {/* Description and details */}
          <div>
            <div className="space-y-6">
              <p className="text-base text-gray-900">Automobile Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}