import Link from "next/link"
import "../globals.css"

export default function PerfilLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="block sm:grid sm:grid-cols-[10rem,auto]">
      <div className="mt-2 sm:mt-32">
        <nav className="sticky top-0">
          <ul className="gap-2 flex flex-col p-4 ">
            <Link
              href={"/perfil"}
              className={
                "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
              }
              aria-current={"page"}
            >
              Mis Anuncios
            </Link>
            <Link
              href={"/perfil/datos-personales"}
              className={
                "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
              }
              aria-current={"page"}
            >
              Datos Personales
            </Link>
          </ul>
        </nav>
      </div>
      <main>{children}</main>
    </div>
  )
}
