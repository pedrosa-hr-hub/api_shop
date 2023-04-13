-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address_city" TEXT,
ADD COLUMN     "address_neighborhood" TEXT,
ADD COLUMN     "address_number" TEXT,
ADD COLUMN     "address_state" TEXT,
ADD COLUMN     "address_street" TEXT,
ADD COLUMN     "address_zip" TEXT,
ADD COLUMN     "addrss_country" TEXT,
ADD COLUMN     "phone" TEXT;

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "idUser" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
