"use client"

import { LockClosedIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import { Prisma } from "@prisma/client"
import { useState } from "react"
import Link from "next/link"

export default function Register() {
  const [isFetching, setIsFetching] = useState(false)
  const [conditions, setConditions] = useState(true)
  const [formData, setFormData] = useState<Prisma.UserCreateInput>({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsFetching(true)

    e.preventDefault()
    await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify(formData),
    })

    setIsFetching(false)
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Image
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Subasta tu coche"
              width={100}
              height={100}
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Registrate ahora Gratis
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            <div className="-space-y-px rounded-md shadow-sm">
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
                  className="border border-gray-400 p-2 mt-2 w-full rounded-md"
                  placeholder="Correo electronico"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border border-gray-400 p-2 mt-2 w-full rounded-md"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  name="terms-and-conditions"
                  type="checkbox"
                  checked={conditions}
                  onChange={() => setConditions(!conditions)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="terms-and-conditions"
                  className="ml-2 block text-xs text-gray-900"
                >
                  Acceptar terminos y condiciones
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Tienes una cuenta? Inicia sesion
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isFetching || !conditions}
                className={`group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white ${
                  conditions
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "bg-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Registrarme
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
