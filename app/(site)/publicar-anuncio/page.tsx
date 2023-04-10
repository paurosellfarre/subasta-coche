"use client"

import AutomobileAdsGrid from "@components/Gallery/AutomobileAdsGrid"
import UploadImages from "@components/Upload/UploadImages"
import { Prisma } from "@prisma/client"
import React, { useState } from "react"

interface PageProps {
  searchParams?: {
    page?: string
  }
}

export default function PublicarAnuncio(props: PageProps) {
  const page = props.searchParams?.page
  const pageNum = typeof page === "string" ? parseInt(page) : 1
  const [isFetching, setIsFetching] = useState(false)
  const [formData, setFormData] = useState<Prisma.AutomobileCreateInput>({
    description: "",
    make: "",
    model: "",
    year: 0,
    kilometers: 0,
    color: "",
    autoType: "",
    fuelType: "",
    offerType: "",
    salePrice: 0,
    user: {
      connect: {
        //TODO: Get the user id from the session
        id: 1,
      },
    },
    images: {
      create: [],
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsFetching(true)
    e.preventDefault()
    await fetch("/api/automobile", {
      method: "POST",
      body: JSON.stringify(formData),
    })

    setIsFetching(false)
  }

  return (
    <main>
      <AutomobileAdsGrid page={pageNum || 1} />
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 mt-7 rounded-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Car Form</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="make"
          >
            Make:
          </label>
          <input
            type="text"
            name="make"
            value={formData.make}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full rounded-md"
            placeholder="Enter the car brand"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="model"
          >
            Model:
          </label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full rounded-md"
            placeholder="Enter the car model"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="year"
          >
            Year:
          </label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full rounded-md"
            placeholder="Enter the car year"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="color"
          >
            Color:
          </label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full rounded-md"
            placeholder="Enter the car color"
          />
        </div>
        <UploadImages
          formData={formData}
          setFormData={setFormData}
        />

        <button
          type="submit"
          disabled={isFetching}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Publicar
        </button>
      </form>
    </main>
  )
}
