import DefaultImage from "@public/No-image-found.jpg"
import Image from "next/image"

export default function AutomobileImages({ images }: any) {
  if (!images) return <></>
  return (
    <div className="sm:col-span-2 sm:border-r sm:border-gray-200 sm:pr-8 block">
      <div>
        <Image
          className="object-cover h-52 sm:h-96 w-full rounded-lg"
          src={images[0]?.image || DefaultImage}
          alt={images[0]?.alt}
        />
      </div>
      <div className="flex pt-5 justify-between">
        {images.slice(1, 6).map((image: any) => (
          <Image
            className="object-cover h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28 rounded-lg"
            key={image.alt}
            src={image.image}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  )
}