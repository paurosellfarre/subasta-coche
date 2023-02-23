"use client"

import Link from "next/link"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export default function MobileMenuButton({ navigation }: any) {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <>
      <div className="inset-y-0 left-0 sm:hidden">
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
          <span className="sr-only">Open main menu</span>
          {isNavExpanded ? (
            <XMarkIcon
              className="block h-6 w-6"
              aria-hidden="true"
            />
          ) : (
            <Bars3Icon
              className="block h-6 w-6"
              aria-hidden="true"
            />
          )}
        </button>
      </div>
      {isNavExpanded ? (
        <div className="sm:hidden absolute w-full top-14 bg-white">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item: any) => (
              <Link
                key={item.name}
                href={item.href}
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                aria-current="page"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </>
  )
}
