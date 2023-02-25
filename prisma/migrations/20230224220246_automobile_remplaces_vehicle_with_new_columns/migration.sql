/*
  Warnings:

  - You are about to drop the column `userId` on the `Auction` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleId` on the `Auction` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the `Vehicle` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `automobileId` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `automobileId` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Auction" DROP CONSTRAINT "Auction_userId_fkey";

-- DropForeignKey
ALTER TABLE "Auction" DROP CONSTRAINT "Auction_vehicleId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_vehicleId_fkey";

-- AlterTable
ALTER TABLE "Auction" DROP COLUMN "userId",
DROP COLUMN "vehicleId",
ADD COLUMN     "automobileId" INTEGER NOT NULL,
ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "vehicleId",
ADD COLUMN     "automobileId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Vehicle";

-- CreateTable
CREATE TABLE "Automobile" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "kilometers" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "autoType" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "offerType" TEXT NOT NULL DEFAULT 'sale',
    "salePrice" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Automobile_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Automobile" ADD CONSTRAINT "Automobile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_automobileId_fkey" FOREIGN KEY ("automobileId") REFERENCES "Automobile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Auction" ADD CONSTRAINT "Auction_automobileId_fkey" FOREIGN KEY ("automobileId") REFERENCES "Automobile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
