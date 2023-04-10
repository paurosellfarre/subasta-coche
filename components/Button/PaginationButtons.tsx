"use client"

import Link from "next/link"

interface PaginationButtonsProps {
  currentPage: number
  disableNextPage?: boolean
  route?: string
  handlePrev?: () => void
  handleNext?: () => void
}
const PaginationButtons = ({ currentPage, route }: PaginationButtonsProps) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Link
        key="Atras"
        href={`${route}?page=${currentPage - 1}`}
        className={
          "bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
        }
      >
        Siguiente
      </Link>

      <p className="mx-4 text-[14px] font-medium">Página {currentPage}</p>

      <Link
        key="Siguiente"
        href={`${route}?page=${currentPage + 1}`}
        className={
          "bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
        }
      >
        Siguiente
      </Link>
    </div>
  )
}

export default PaginationButtons
