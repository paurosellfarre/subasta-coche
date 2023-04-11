import AutomobileAdsGrid from "@components/Gallery/AutomobileAdsGrid"

interface PageProps {
  searchParams?: {
    page?: string
  }
}

export default function Anuncios(props: PageProps) {
  const page = props.searchParams?.page
  const pageNum = typeof page === "string" ? parseInt(page) : 1

  return (
    <>
      <AutomobileAdsGrid page={pageNum || 1} />
    </>
  )
}
