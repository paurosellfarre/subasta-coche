import Link from "next/link"

interface PaginationButtonsProps {
  currentPage: number
  disableNextPage?: boolean
  route?: string
}

const PaginationButtons = ({
  currentPage,
  route,
  disableNextPage,
}: PaginationButtonsProps) => {
  return (
    <div className="flex flex-row items-center justify-center pb-5">
      {currentPage > 1 ? (
        <Link
          key="Atras"
          href={`${route}?page=${currentPage - 1}`}
          className={
            "bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
          }
        >
          Atras
        </Link>
      ) : null}

      <p className="mx-4 text-[14px] font-medium">Página {currentPage}</p>

      {!disableNextPage ? (
        <Link
          key="Siguiente"
          href={`${route}?page=${currentPage + 1}`}
          className={
            "bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
          }
        >
          Siguiente
        </Link>
      ) : null}
    </div>
  )
}

export default PaginationButtons
