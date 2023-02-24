// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//import prisma from "../../lib/prisma"

import vehicle from "../../../../data/vehicle.json"

export default async function handler() {
  return vehicle
}
