// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//import prisma from "../../lib/prisma"

import automobile from "../../../../data/automobile.json"

export default async function handler() {
  return automobile
}
