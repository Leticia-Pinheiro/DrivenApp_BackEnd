-- CreateTable
CREATE TABLE "contents" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "compiled" TEXT NOT NULL,
    "moduleId" INTEGER NOT NULL,

    CONSTRAINT "contents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "contents" ADD CONSTRAINT "contents_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
