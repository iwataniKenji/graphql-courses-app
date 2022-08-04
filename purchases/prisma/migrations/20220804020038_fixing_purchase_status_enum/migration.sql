/*
  Warnings:

  - The `status` column on the `Purchase` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PurchaseStatus" AS ENUM ('PENDING', 'APPROVED', 'FAILED');

-- AlterTable
ALTER TABLE "Purchase" DROP COLUMN "status",
ADD COLUMN     "status" "PurchaseStatus" NOT NULL DEFAULT 'PENDING';

-- DropEnum
DROP TYPE "PurchaseState";
