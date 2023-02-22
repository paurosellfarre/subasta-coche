export default function VehicleImages({ images }: any) {
  return (
    <div className="sm:col-span-2 sm:border-r sm:border-gray-200 sm:pr-8 block">
      <div>
        <img
          className="object-cover h-52 sm:h-96 w-full rounded-lg"
          src={images[0].image}
          alt={images[0].alt}
        />
      </div>
      <div className="flex pt-5 justify-between">
        {images.slice(1, 6).map((image: any) => (
          <img
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
