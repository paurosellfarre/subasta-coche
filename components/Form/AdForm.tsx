"use client"

import { useEffect, useState } from "react"
import { Prisma } from "@prisma/client"

import { COLORS, FUEL_TYPES, MAKERS } from "@constants"
import { useForm } from "@hooks/useForm"

import UploadImages from "@components/Upload/UploadImages"
//Toast Alert
import CustomAlert from "@components/Alert/CustomAlert"
import { CustomAlertI } from "@components/Alert/customAlert.interface"

export default function AdForm({
  previousData,
  method,
}: {
  previousData?: Prisma.AutomobileCreateInput & { id: number }
  method: "POST" | "PUT"
}) {
  const [isFetching, setIsFetching] = useState(false)
  const [alertData, setAlertData] = useState({} as CustomAlertI)
  const { formData, setFormData, handleChange, error } = useForm({
    description: { type: "string", required: true },
    make: { type: "enum", enum: MAKERS, required: true },
    model: { type: "string", minLength: 2, required: true },
    year: { type: "number", required: true, default: 2023 },
    kilometers: { type: "number" },
    color: { type: "enum", enum: COLORS, required: true },
    autoType: { type: "enum", enum: ["Coche"], required: true },
    fuelType: { type: "enum", enum: FUEL_TYPES, required: true },
    transmission: { type: "enum", enum: ["Manual", "Automatico"] },
    doors: { type: "number" },
    seats: { type: "number" },
    cc: { type: "number" },
    cv: { type: "number" },
    offerType: { type: "enum", enum: ["sale", "auction"], required: true },
    salePrice: { type: "number", required: true },
    user: { type: "object", properties: { connect: { id: 0 } } },
    images: { type: "object", properties: { create: [] } },
  }) as {
    formData: Prisma.AutomobileCreateInput & { id: number }
    setFormData: any
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    error: boolean
  }

  useEffect(() => {
    //If previousData is passed, set the form data to the previous data
    if (previousData) {
      setFormData({ ...formData, ...previousData })
    }
  }, [previousData])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsFetching(true)
    e.preventDefault()

    await fetch(
      method === "POST" ? "/api/automobile" : `/api/automobile/${formData.id}`,
      {
        method,
        body: JSON.stringify(formData),
      }
    ).then((res) => {
      //Toast Alert
      setAlertData({
        showAlert: true,
        success: res.ok,
        code: res.status,
        message: res.statusText,
        setAlertData,
      })

      setIsFetching(false)
    })
  }
  return (
    <>
      {
        //Toast Alert
        alertData.showAlert && <CustomAlert {...alertData} />
      }
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
                  checked={formData.fuelType === fuelType}
                />
                <span className="ml-2">{fuelType}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-around">
          {/* CC input */}
          <div className="mb-4 w-1/2 pr-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="cc"
            >
              CC
            </label>
            <input
              name="cc"
              type="number"
              className="border border-gray-400 p-2 w-full rounded-md"
              value={formData.cc}
              onChange={handleChange}
            />
          </div>

          {/* CV input */}
          <div className="mb-4 w-1/2 pr-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="cv"
            >
              CV
            </label>
            <input
              name="cv"
              type="number"
              className="border border-gray-400 p-2 w-full rounded-md"
              value={formData.cv}
              onChange={(e) => handleChange(e as any)}
            />
          </div>

          {/* Transmission input */}
          <div className="mb-4 w-1/2 pr-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="transmission"
            >
              Transmission
            </label>
            <select
              name="transmission"
              className="border border-gray-400 p-2 w-full rounded-md"
              onChange={(e) => handleChange(e as any)}
            >
              <option value="Manual">Manual</option>
              <option value="Automatico">Automatico</option>
            </select>
          </div>
        </div>

        <div className="flex justify-around">
          {/* Doors input */}
          <div className="mb-4 w-1/2 pr-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="doors"
            >
              Doors
            </label>
            <input
              name="doors"
              type="number"
              className="border border-gray-400 p-2 w-full rounded-md"
              onChange={(e) => handleChange(e as any)}
            />
          </div>

          {/* Seats input */}
          <div className="mb-4 w-1/2 pr-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="seats"
            >
              Seats
            </label>
            <input
              name="seats"
              type="number"
              className="border border-gray-400 p-2 w-full rounded-md"
              onChange={(e) => handleChange(e as any)}
            />
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
                checked={formData.offerType === "sale"}
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
                checked={formData.offerType === "auction"}
              />
              <span className="ml-2">Subastar (7 días)</span>
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
          disabled={isFetching || error}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded h-12"
        >
          Publicar
        </button>

        {error && (
          <div>
            <span className="text-red-500 font-bold">
              Faltan campos por rellenar
            </span>
          </div>
        )}
      </form>
    </>
  )
}
