"use client"

import React, { useState } from "react"

interface CarFormData {
  brand: string
  model: string
  year: number
  color: string
}

export default function PublicarAnuncio() {
  const [isFetching, setIsFetching] = useState(false)
  const [formData, setFormData] = useState<CarFormData>({
    brand: "",
    model: "",
    year: 0,
    color: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsFetching(true)
    e.preventDefault()
    const response = await fetch("/api/automobile/create-ad", {
      method: "POST",
      body: JSON.stringify(formData),
    })

    setIsFetching(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 mt-7 rounded-lg"
    >
      <h2 className="text-xl font-semibold mb-4">Car Form</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="brand"
        >
          Brand:
        </label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
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
      <button
        type="submit"
        disabled={isFetching}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  )
}
