export default function FeaturesGrid({
  make,
  model,
  kilometers,
  year,
  color,
  fuelType,
  transmission,
  doors,
  seats,
  cc,
  cv,
  autoType,
  salePrice,
}: {
  make: string
  model: string
  kilometers: number
  year: number
  color: string
  fuelType: string
  transmission: string
  doors: number
  seats: number
  cc: number
  cv: number
  autoType: string
  salePrice: number | null
}) {
  return (
    <>
      <div className="grid grid-cols-4 pt-5 justify-between divide-x-2 text-center pb-5">
        <div>
          <span>
            <b>Precio:</b> {salePrice} €
          </span>
        </div>
        <div>
          <span>
            <b>Motor:</b> {fuelType}
          </span>
        </div>
        <div>
          <span>
            <b>Kilometros:</b> {kilometers}
          </span>
        </div>
        <div>
          <span>
            <b>Fabricación:</b> {year}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4 justify-between divide-x-2 text-center pb-5">
        <div>
          <span>
            <b>Marca:</b> {make}
          </span>
        </div>
        <div>
          <span>
            <b>Modelo:</b> {model}
          </span>
        </div>
        <div>
          <span>
            <b>Color:</b> {color}
          </span>
        </div>
        <div>
          <span>
            <b>Tr:</b> {transmission}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4 justify-between divide-x-2 text-center">
        <div>
          <span>
            <b>Puertas:</b> {doors}
          </span>
        </div>
        <div>
          <span>
            <b>Asientos:</b> {seats}
          </span>
        </div>
        <div>
          <span>
            <b>CV:</b> {cv}
          </span>
        </div>
        <div>
          <span>
            <b>CC:</b> {cc}
          </span>
        </div>
      </div>
    </>
  )
}
