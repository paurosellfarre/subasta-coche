"use client"

import { signIn } from "next-auth/react"
import { useSession, signOut } from "next-auth/react"

export default function Component() {
  const { data } = useSession()

  if (data) {
    return (
      <>
        Signed in as {data?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  } else {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
  }
}
