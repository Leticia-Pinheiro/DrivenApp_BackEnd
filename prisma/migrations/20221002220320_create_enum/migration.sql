/*
  Warnings:

  - You are about to drop the column `userTypeId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `userType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "userTypes" AS ENUM ('company', 'teacher', 'tutor', 'student');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "userTypeId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "type" "userTypes" NOT NULL;

-- DropTable
DROP TABLE "userType";
