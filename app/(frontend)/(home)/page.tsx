import AutomobileAdsGrid from "@components/Grid/AutomobileAdsGrid"

interface PageProps {
  searchParams?: {
    page?: string
  }
}

export default async function Home(props: PageProps) {
  const page = props.searchParams?.page
  const pageNum = typeof page === "string" ? parseInt(page) : 1

  return (
    <main>
      <AutomobileAdsGrid page={pageNum || 1} />
    </main>
  )
}
