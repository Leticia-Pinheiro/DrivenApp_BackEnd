/*
  Warnings:

  - Added the required column `classId` to the `teachers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group_classId` to the `tutors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "teachers" ADD COLUMN     "classId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "tutors" ADD COLUMN     "group_classId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "groups" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_class" (
    "id" SERIAL NOT NULL,
    "classId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "group_class_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "teachers" ADD CONSTRAINT "teachers_classId_fkey" FOREIGN KEY ("classId") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tutors" ADD CONSTRAINT "tutors_group_classId_fkey" FOREIGN KEY ("group_classId") REFERENCES "group_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_class" ADD CONSTRAINT "group_class_classId_fkey" FOREIGN KEY ("classId") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_class" ADD CONSTRAINT "group_class_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
