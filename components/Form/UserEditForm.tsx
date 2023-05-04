"use client"

import { useEffect, useState } from "react"
import { Prisma } from "@prisma/client"

import { useForm } from "@hooks/useForm"

//Toast Alert
import CustomAlert from "@components/Alert/CustomAlert"
import { CustomAlertI } from "@components/Alert/customAlert.interface"

export default function UserEditForm({
  previousData,
}: {
  previousData: Prisma.UserUpdateInput
}) {
  const [isFetching, setIsFetching] = useState(false)
  const [alertData, setAlertData] = useState({} as CustomAlertI)
  const { formData, setFormData, handleChange, error } = useForm({
    name: { type: "string", required: true },
    email: { type: "string", required: true },
    phone: { type: "string", required: false },
    address: { type: "string", required: false },
  })

  useEffect(() => {
    //If previousData is passed, set the form data to the previous data
    if (previousData) {
      setFormData({ ...formData, ...previousData })
    }
  }, [previousData])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsFetching(true)
    e.preventDefault()

    await fetch(`/api/user/`, {
      method: "PUT",
      body: JSON.stringify(formData),
    }).then((res) => {
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
        className="mt-8 space-y-4"
      >
        <div className="space-y-2 rounded-md shadow-sm">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-md"
              placeholder="Nombre y Apellidos"
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-md"
              placeholder="Correo electronico"
            />
          </div>
          <div>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-md"
              placeholder="Telefono"
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-md"
              placeholder="Dirección para recogida de vehículos"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={error || isFetching}
            className={`group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white ${
              !error ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
          >
            Guardar
          </button>
        </div>
      </form>
      {error && (
        <span className="text-red-500 font-bold">
          Faltan campos por rellenar
        </span>
      )}
    </>
  )
}
