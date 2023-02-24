import "./globals.css"

import AuthContext from "./auth/AuthContext"
import Header from "../components/Navbar/Header"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Subasta Tu Coche",
  description: "La mejor forma de vender tu coche en subasta online",
  keywords: [
    "Subasta",
    "Compra",
    "Venta",
    "Coche",
    "Automovil",
    "Auto",
    "Carro",
  ],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

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
