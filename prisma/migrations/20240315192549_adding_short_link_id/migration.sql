/*
  Warnings:

  - Added the required column `shortLinkId` to the `Visit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Visit" DROP CONSTRAINT "Visit_id_fkey";

-- AlterTable
ALTER TABLE "Visit" ADD COLUMN     "shortLinkId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_shortLinkId_fkey" FOREIGN KEY ("shortLinkId") REFERENCES "ShortLink"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
