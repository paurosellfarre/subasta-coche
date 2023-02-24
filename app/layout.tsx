import "./globals.css"

import AuthContext from "./auth/AuthContext"
import Header from "../components/Navbar/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="mx-auto max-w-5xl">
        <AuthContext>
          <Header />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
