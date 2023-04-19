import { prisma } from "@utils/prisma"
import { Prisma } from "@prisma/client"

async function getContact(id: number): Promise<
  Prisma.UserGetPayload<{
    select: {
      name: true
      email: true
      phone: true
      address: true
    }
  }>
> {
  //find user name, email phone and address by id
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      name: true,
      email: true,
      phone: true,
      address: true,
    },
  })

  return user
}

export default getContact
