"use client"

import { LockClosedIcon } from "@heroicons/react/20/solid"
import { useState } from "react"

//Nextjs
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"

//NextAuth
import { signIn } from "next-auth/react"

//Toast Alert
import CustomAlert from "@components/Alert/CustomAlert"
import { CustomAlertI } from "@components/Alert/customAlert.interface"

//Custom hooks
import { useForm } from "@hooks/useForm"
import PageTitle from "@components/Title/PageTitle"

export default function Login() {
  const router = useRouter()
  const searchParams = useSearchParams()?.get("callbackUrl") || "/"
  const [alertData, setAlertData] = useState({} as CustomAlertI)
  const [isFetching, setIsFetching] = useState(false)
  const { formData, handleChange, error } = useForm({
    email: { type: "string", required: true },
    password: { type: "string", required: true },
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsFetching(true)

    e.preventDefault()

    //Route user to ?callbackUrl= url param
    signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    }).then((res) => {
      if (res?.ok) {
        router.push(searchParams)
      } else {
        //Toast Alert
        setAlertData({
          showAlert: true,
          success: false,
          code: 401,
          message: "Credenciales incorrectas",
          setAlertData,
        })
      }
    })

    setIsFetching(false)
  }

  return (
    <>
      {
        //Toast Alert
        alertData.showAlert && <CustomAlert {...alertData} />
      }
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <PageTitle title="Acceso a la cuenta" />
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            <div className="rounded-md shadow-sm">
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-400 p-2 w-full rounded-md"
                  placeholder="Correo electronico"
                />
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border border-gray-400 p-2 w-full rounded-md"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href="/registro"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  No tienes una cuenta? Registrate
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isFetching || error}
                className={`group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white ${
                  !error ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Acceder
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
