import DefaultImage from "@public/No-image-found.jpg"
import Image from "next/image"

export default function AutomobileImages({ images }: any) {
  if (!images) return <></>
  return (
    <div className="sm:col-span-2 sm:border-r sm:border-gray-200 sm:pr-8 block">
      <div>
        <Image
          className="object-cover h-52 sm:h-96 w-full rounded-lg"
          src={images[0]?.binaryFile || DefaultImage}
          alt={images[0]?.name || "Default Image"}
          width={100}
          height={100}
        />
      </div>
      <div className="flex pt-5 justify-between">
        {images.slice(1, 6).map((image: any) => (
          <Image
            className="object-cover h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28 rounded-lg"
            key={image.id}
            src={image.binaryFile}
            alt={image.name}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  )
}
