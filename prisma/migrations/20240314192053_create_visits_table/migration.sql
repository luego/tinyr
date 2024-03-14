-- CreateTable
CREATE TABLE "Visit" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_id_fkey" FOREIGN KEY ("id") REFERENCES "ShortLink"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
