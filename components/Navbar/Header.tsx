import Link from "next/link"
import Image from "next/image"

import MobileMenuButton from "@components/Navbar/MobileMenuButton"
import LoginButton from "@components/Button/LoginButton"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Registro", href: "/registro" },
  { name: "Perfil", href: "/perfil" },
]

export default function Header() {
  //const session = await getServerSession(authOptions)

  return (
    <nav>
      <div className="sm:pl-4">
        <div className="relative flex h-14 items-center justify-between">
          <div className="flex sm:items-stretch sm:justify-start">
            {/* Mobile menu button*/}
            <MobileMenuButton navigation={navigation} />

            <div className="flex flex-shrink-0 items-center">
              <Image
                className="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Subasta Tu Coche"
                width={500}
                height={500}
              />
              <Image
                className="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Subasta Tu Coche"
                width={500}
                height={500}
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={
                      "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                    aria-current={"page"}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <LoginButton />
          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6">
            <div className="bg-black hover:bg-white text-white font-semibold hover:text-black py-3 px-4">
              <Link
                key={"Publica tu anuncio"}
                href="/publicar-anuncio"
                className="text-xs block"
              >
                Publica tu anuncio
                <span className="text-right block">¡es gratis!</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
