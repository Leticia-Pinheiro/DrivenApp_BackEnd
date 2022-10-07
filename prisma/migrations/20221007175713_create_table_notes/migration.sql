-- CreateEnum
CREATE TYPE "notesOptions" AS ENUM ('abaixo', 'dentro', 'acima');

-- DropEnum
DROP TYPE "notes";

-- CreateTable
CREATE TABLE "notes" (
    "id" SERIAL NOT NULL,
    "note" "notesOptions" NOT NULL,
    "feedback" TEXT NOT NULL,
    "studentId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
