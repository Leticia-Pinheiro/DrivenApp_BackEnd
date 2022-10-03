-- CreateTable
CREATE TABLE "tutors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "tutors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tutors" ADD CONSTRAINT "tutors_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tutors" ADD CONSTRAINT "tutors_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
