import { use } from "react"

import AdForm from "@components/Form/AdForm"

import fetchAutomobile from "@api/automobile/[id]/fetch-Automobile"

export default function EditarAnuncio({ params }: { params: { id: string } }) {
  const automobile = use(fetchAutomobile(Number(params.id)))

  return (
    <AdForm
      method="PUT"
      previousData={{
        id: automobile.id,
        description: automobile.description,
        make: automobile.make,
        model: automobile.model,
        year: automobile.year,
        kilometers: automobile.kilometers,
        color: automobile.color,
        autoType: automobile.autoType,
        fuelType: automobile.fuelType,
        offerType: automobile.offerType,
        salePrice: automobile.salePrice,
        user: { connect: { id: automobile.userId } },
        images: {
          create:
            //Return only necessary data
            automobile.images.map((image) => {
              return {
                name: image.name,
                binaryFile: image.binaryFile,
              }
            }),
        },
      }}
    />
  )
}
