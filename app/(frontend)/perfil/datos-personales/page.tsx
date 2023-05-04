import UserEditForm from "@components/Form/UserEditForm"
import PageTitle from "@components/Title/PageTitle"

import getSession from "@utils/session"

import getContact from "@api/user/[id]/fetch-User"

export default async function DatosPersonales() {
  const session = await getSession()
  const userProfile = await getContact(session?.user.id as number)

  return (
    <>
      <PageTitle title="Datos Personales" />
      <div className="flex items-center justify-center py-5 px-4">
        <div className="w-full max-w-md space-y-8">
          <UserEditForm
            previousData={{
              name: userProfile.name,
              email: userProfile.email,
              phone: userProfile.phone,
              address: userProfile.address,
            }}
          />
        </div>
      </div>
    </>
  )
}
