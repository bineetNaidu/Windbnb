/*
  Warnings:

  - You are about to drop the column `is_superhost` on the `rooms` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `rooms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "hosts" ADD COLUMN     "is_superhost" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "rooms" DROP COLUMN "is_superhost",
DROP COLUMN "rating";
