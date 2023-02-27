import prisma from "@utils/prisma"
import { Prisma } from "@prisma/client"
import bcrypt from "bcryptjs"

export default async function handler(userData: Prisma.UserCreateInput) {
  try {
    const result = await prisma.user.create({
      data: {
        ...userData,

        // Hash users password before saving it to the database
        password: await bcrypt.hash(userData.password, 10),
      },
    })
    return result
  } catch (err) {
    return false
  }
}
