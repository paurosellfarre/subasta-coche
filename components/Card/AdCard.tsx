import Image from "next/image"
import Link from "next/link"
import { Prisma } from "@prisma/client"
import DefaultImage from "@public/No-image-found.jpg"

export default function AdCard({
  automobile,
}: {
  automobile: Prisma.AutomobileGetPayload<{ include: { images: true } }>
}) {
  return (
    <div
      key={automobile.id}
      className="group relative bg-white rounded-lg shadow-lg overflow-hidden p-1 sm:p-2"
    >
      <div className="min-w-300 h-60 sm:h-44 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none">
        <Image
          // @ts-ignore
          src={automobile.images[0]?.binaryFile || DefaultImage}
          alt={
            automobile.images[0]?.name ||
            `${automobile.make} ${automobile.model} Image`
          }
          width={50}
          height={50}
          className="absolute m-2"
        />

        <Image
          // @ts-ignore
          src={automobile.images[0]?.binaryFile || DefaultImage}
          alt={
            automobile.images[0]?.name ||
            `${automobile.make} ${automobile.model} Image`
          }
          width={300}
          height={300}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/anuncio/${automobile.id}`}>
              <span
                aria-hidden="true"
                className="absolute inset-0"
              />
              {`${automobile.make} ${automobile.model}`}
            </Link>
          </h3>
          <p className="text-xs text-gray-500">{automobile.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {`${automobile.salePrice} $`}
        </p>
      </div>
      <div className="mt-4 grid grid-cols-4 divide-x-2 text-xs text-center text-gray-500">
        <div>
          <span>{automobile.year}</span>
        </div>
        <div>
          <span>{automobile.kilometers} Km</span>
        </div>
        <div>
          <span>{automobile.fuelType}</span>
        </div>
        <div>
          <span>Automático</span>
        </div>
      </div>
    </div>
  )
}
