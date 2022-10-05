/*
  Warnings:

  - You are about to drop the column `group_classId` on the `tutors` table. All the data in the column will be lost.
  - You are about to drop the `group_class` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `classId` to the `groups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupId` to the `tutors` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "group_class" DROP CONSTRAINT "group_class_classId_fkey";

-- DropForeignKey
ALTER TABLE "group_class" DROP CONSTRAINT "group_class_groupId_fkey";

-- DropForeignKey
ALTER TABLE "tutors" DROP CONSTRAINT "tutors_group_classId_fkey";

-- AlterTable
ALTER TABLE "groups" ADD COLUMN     "classId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "tutors" DROP COLUMN "group_classId",
ADD COLUMN     "groupId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "group_class";

-- AddForeignKey
ALTER TABLE "tutors" ADD CONSTRAINT "tutors_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_classId_fkey" FOREIGN KEY ("classId") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
