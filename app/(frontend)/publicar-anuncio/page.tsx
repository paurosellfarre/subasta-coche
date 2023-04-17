"use client"

import React, { useState } from "react"
import { Prisma } from "@prisma/client"
import UploadImages from "@components/Upload/UploadImages"
import { COLORS, FUEL_TYPES, MAKERS } from "../../../constants"

export default function PublicarAnuncio() {
  const [isFetching, setIsFetching] = useState(false)
  const [errors, setErrors] = useState(false)
  const [formData, setFormData] = useState<Prisma.AutomobileCreateInput>({
    description: undefined,
    make: "Audi",
    model: "",
    year: 0,
    kilometers: 0,
    color: "Negro",
    autoType: "Coche",
    fuelType: "Gasolina",
    offerType: undefined,
    salePrice: 0,
    user: {
      connect: {
        id: 0,
      },
    },
    images: {
      create: [],
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (!value || value === "0") {
      e.target.className = "border border-red-400 p-2 w-full rounded-md"
      setErrors(true)
    } else {
      e.target.className = "border border-gray-400 p-2 w-full rounded-md"
      setErrors(false)
    }

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsFetching(true)
    e.preventDefault()

    const result = await fetch("/api/automobile", {
      method: "POST",
      body: JSON.stringify(formData),
    })

    setIsFetching(false)

    if (result.ok) {
      alert("Anuncio publicado con éxito")
    } else {
      alert("Error al publicar el anuncio")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 mt-7 rounded-lg"
    >
      <h2 className="text-xl font-semibold mb-4 text-center ">
        Información del vehículo
      </h2>

      <div className="flex justify-around">
        {/*
        Select list with the constant make options
      */}
        <div className="mb-4 w-1/2 pr-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="make"
          >
            Fabricante
          </label>
          <select
            name="make"
            className="border border-gray-400 p-2 w-full rounded-md"
            onChange={(e) => handleChange(e as any)}
          >
            {MAKERS.map((maker) => (
              <option
                key={maker}
                value={maker}
              >
                {maker}
              </option>
            ))}
          </select>
        </div>

        {/*
        Input list with the model options
      */}
        <div className="mb-4 w-1/2 pl-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="model"
          >
            Modelo
          </label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full rounded-md"
            placeholder="Escribe el modelo del vehículo"
          />
        </div>
      </div>

      <div className="flex justify-around">
        {/*
        Input number with the kilometers
        */}
        <div className="mb-4 w-1/2 pr-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="kilometers"
          >
            Kilometros
          </label>
          <input
            type="number"
            name="kilometers"
            value={formData.kilometers}
            onChange={handleChange}
            min={0}
            className="border border-gray-400 p-2 w-full rounded-md"
            placeholder="Escribe el año de fabricación"
          />
        </div>

        {/*
        Input number with the fabrication year
        */}
        <div className="mb-4 w-1/2 pl-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="year"
          >
            Año de Fabricación
          </label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            min={0}
            className="border border-gray-400 p-2 w-full rounded-md"
            placeholder="Escribe el año de fabricación"
          />
        </div>
      </div>

      <div className="flex justify-around">
        {/*
        Select list with the constant color options
      */}
        <div className="mb-4 w-1/2 pr-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="color"
          >
            Color
          </label>
          <select
            name="color"
            className="border border-gray-400 p-2 w-full rounded-md"
            onChange={(e) => handleChange(e as any)}
          >
            {COLORS.map((color) => (
              <option
                key={color}
                value={color}
              >
                {color}
              </option>
            ))}
          </select>
        </div>

        {/*
        Radio button with the constant fuel options
      */}
        <div className="mb-4 w-1/2 pl-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="fuelType"
          >
            Motor
          </label>
          {FUEL_TYPES.map((fuelType) => (
            <label
              key={fuelType}
              className="inline-flex items-center mr-6"
            >
              <input
                type="radio"
                name="fuelType"
                value={fuelType}
                onChange={handleChange}
              />
              <span className="ml-2">{fuelType}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-around">
        {/*
          Input number with the Sale Price
        */}
        <div className="mb-4 w-1/2 pr-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="fuelType"
          >
            Precio (€ - Euro)
          </label>
          <input
            type="number"
            name="salePrice"
            value={formData.salePrice || 0}
            onChange={handleChange}
            min={0}
            className="border border-gray-400 p-2 w-full rounded-md"
            placeholder="Escribe el precio de venta o de subasta"
          />
        </div>

        {/*
          Radiobutton with the constants offer types
        */}
        <div className="mb-4 w-1/2 pl-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="offerType"
          >
            Tipo de Oferta
          </label>
          <label
            key="Venta"
            className="inline-flex items-center mr-6"
          >
            <input
              type="radio"
              name="offerType"
              value="sale"
              onChange={handleChange}
              defaultChecked
            />
            <span className="ml-2">Vender</span>
          </label>

          <label
            key="Subasta"
            className="inline-flex items-center mr-6"
          >
            <input
              type="radio"
              name="offerType"
              value="auction"
              onChange={handleChange}
            />
            <span className="ml-2">Subastar</span>
          </label>
        </div>
      </div>

      {/*
        Textarea with the description
      */}
      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="description"
        >
          Descripción
        </label>
        <textarea
          name="description"
          value={formData.description || ""}
          onChange={(e) => handleChange(e as any)}
          className="border border-gray-400 p-2 w-full rounded-md"
          placeholder="Añade una descripción del vehículo"
        />
      </div>

      <UploadImages
        formData={formData}
        setFormData={setFormData}
      />

      <button
        type="submit"
        disabled={isFetching || errors}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded h-12"
      >
        Publicar
      </button>

      {errors && (
        <div>
          <span className="text-red-500 font-bold">
            Faltan campos por rellenar
          </span>
        </div>
      )}
    </form>
  )
}
