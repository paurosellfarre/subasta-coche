import PageTitle from "@components/Title/PageTitle"
import UserAutomobileAdsGrid from "@components/Grid/UserAutomobileAdsGrid"

import getSession from "@utils/session"

import fetchUserAutomobiles from "@api/automobile/fetch-User-Automobiles"

export default async function Perfil() {
  const session = await getSession()
  const ads = await fetchUserAutomobiles(session?.user.id as number)

  return (
    <>
      <PageTitle title="Mis anuncios" />
      <UserAutomobileAdsGrid ads={ads} />
    </>
  )
}
