/*
  Warnings:

  - You are about to drop the column `companyId` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `teachers` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `tutors` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_companyId_fkey";

-- DropForeignKey
ALTER TABLE "teachers" DROP CONSTRAINT "teachers_companyId_fkey";

-- DropForeignKey
ALTER TABLE "tutors" DROP CONSTRAINT "tutors_companyId_fkey";

-- AlterTable
ALTER TABLE "student" DROP COLUMN "companyId";

-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "companyId";

-- AlterTable
ALTER TABLE "tutors" DROP COLUMN "companyId";
