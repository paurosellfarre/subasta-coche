"use client"

import { useRouter } from "next/navigation"

interface PaginationButtonsProps {
  currentPage: number
  disableNextPage?: boolean
  route?: string
  handlePrev?: () => void
  handleNext?: () => void
}
const PaginationButtons = ({
  currentPage,
  route,
  disableNextPage,
  handlePrev,
  handleNext,
}: PaginationButtonsProps) => {
  const router = useRouter()

  const handleNextPage = () => {
    if (disableNextPage) return
    if (route) {
      return router.push(`${route}?page=${currentPage + 1}`)
    }
    if (handleNext) {
      return handleNext()
    }
  }

  const handlePrevPage = () => {
    if (currentPage === 1) return
    if (route) {
      return router.push(`${route}?page=${currentPage - 1}`)
    }
    if (handlePrev) {
      return handlePrev()
    }
  }

  return (
    <div className="flex flex-row items-center justify-center">
      <button
        onClick={() => handlePrevPage()}
        className={
          "bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
        }
        hidden={currentPage === 1}
      >
        Atras
      </button>

      <p className="mx-4 text-[14px] font-medium">Página {currentPage}</p>

      <button
        onClick={() => handleNextPage()}
        className={
          "bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
        }
        hidden={disableNextPage}
      >
        Siguiente
      </button>
    </div>
  )
}

export default PaginationButtons
