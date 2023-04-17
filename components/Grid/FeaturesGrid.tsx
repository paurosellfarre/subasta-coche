export default function FeaturesGrid({
  make,
  model,
  kilometers,
  year,
  color,
  fuelType,
  autoType,
  salePrice,
}: {
  make: string
  model: string
  kilometers: number
  year: number
  color: string
  fuelType: string
  autoType: string
  salePrice: number | null
}) {
  return (
    <>
      <div className="grid grid-cols-4 pt-5 justify-between divide-x-2 text-center pb-5">
        <div>
          <span>{make}</span>
        </div>
        <div>
          <span>{model}</span>
        </div>
        <div>
          <span>{kilometers} Km</span>
        </div>
        <div>
          <span>{year}</span>
        </div>
      </div>
      <div className="grid grid-cols-4 justify-between divide-x-2 text-center">
        <div>
          <span>{color}</span>
        </div>
        <div>
          <span>{fuelType}</span>
        </div>
        <div>
          <span>{autoType}</span>
        </div>
        <div>
          <span>{salePrice}</span>
        </div>
      </div>
    </>
  )
}
