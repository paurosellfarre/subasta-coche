/*
  Warnings:

  - Added the required column `cc` to the `Automobile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cv` to the `Automobile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doors` to the `Automobile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seats` to the `Automobile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transmission` to the `Automobile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Automobile" ADD COLUMN     "cc" INTEGER NOT NULL,
ADD COLUMN     "cv" INTEGER NOT NULL,
ADD COLUMN     "doors" INTEGER NOT NULL,
ADD COLUMN     "seats" INTEGER NOT NULL,
ADD COLUMN     "transmission" TEXT NOT NULL;
