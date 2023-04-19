import getContact from "@api/user/[id]/fetch-User"
import { use } from "react"

export default function ContactCard({ id }: { id: number }) {
  const contact = use(getContact(id))

  return (
    <>
      {contact && (
        <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 text-center">
            <h2 className="text-xl font-bold font-medium text-gray-900">
              📞 Contacto
            </h2>
            <p className="mt-5 text-gray-500">{contact.name}</p>
            <p className="mt-1 text-sm text-gray-500">{contact.phone}</p>
            <p className="mt-1 text-sm text-gray-500">{contact.email}</p>
          </div>
        </div>
      )}
    </>
  )
}
