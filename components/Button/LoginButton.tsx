"use client"

import { signIn } from "next-auth/react"
import { useSession, signOut } from "next-auth/react"

export default function LoginButton() {
  const { data } = useSession()

  if (data) {
    return (
      <div className="grid">
        {data?.user?.name}
        <button onClick={() => signOut()}>Desconnectar</button>
      </div>
    )
  } else {
    return (
      <>
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded text-sm font-medium text-center"
          onClick={() => signIn()}
        >
          Acceso
        </button>
      </>
    )
  }
}
