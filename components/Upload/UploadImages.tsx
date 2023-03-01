"use client"

import base64 from "@utils/base64"
import Image from "next/image"

export default function UploadImages({ setFormData, formData }: any) {
  const uploadImageToClient = async (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]

      const result = await base64(file)

      setFormData((prevFormData: typeof formData) => ({
        ...prevFormData,
        //Append the image to the images array
        images: {
          create: [
            ...prevFormData.images.create,
            {
              name: file.name,
              binaryFile: result,
            },
          ],
        },
      }))
    }
  }
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Imágenes del vehiculo
      </label>
      <div className="mt-1 mb-6 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
        <div className="space-y-1 text-center justify-center">
          {formData.images.create.length === 0 ? (
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            //Show the images preview
            <div className="grid grid-cols-2 lg:grid-cols-5 mb-5 justify-around">
              {formData.images.create.map((image: any) => (
                <div key={image.name}>
                  <button
                    key={image.name}
                    className="absolute bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center"
                    onClick={() => {
                      setFormData((prevFormData: typeof formData) => ({
                        ...prevFormData,
                        //Remove the image from the images array
                        images: {
                          create: prevFormData.images.create.filter(
                            (img: any) => img.name !== image.name
                          ),
                        },
                      }))
                    }}
                  >
                    X
                  </button>
                  <Image
                    key={image.name}
                    src={image.binaryFile}
                    alt={image.name}
                    width={100}
                    height={70}
                    className="p-1"
                  />
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-center text-sm text-gray-600">
            <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
              <span>Seleccionar Imágen</span>
              <input
                type="file"
                className="sr-only"
                onChange={uploadImageToClient}
              />
            </label>
          </div>
          <p className="text-xs text-gray-500">PNG o JPG hasta 10MB</p>
        </div>
      </div>
    </div>
  )
}
