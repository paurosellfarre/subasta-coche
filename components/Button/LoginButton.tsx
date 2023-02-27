"use client"

import { signIn } from "next-auth/react"
import { useSession, signOut } from "next-auth/react"

export default function LoginButton() {
  const { data } = useSession()

  if (data) {
    return (
      <div className="grid">
        Signed in as {data?.user?.name}
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  } else {
    return (
      <>
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
  }
}
