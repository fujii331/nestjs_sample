/*
  Warnings:

  - You are about to alter the column `prodCd` on the `OrderRequestDetail` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.
  - You are about to alter the column `makerCd` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.

*/
-- DropForeignKey
ALTER TABLE `OrderRequestDetail` DROP FOREIGN KEY `OrderRequestDetail_prodCd_fkey`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_makerCd_fkey`;

-- AlterTable
ALTER TABLE `OrderRequestDetail` MODIFY `prodCd` VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE `Product` MODIFY `makerCd` VARCHAR(20) NOT NULL;

-- AddForeignKey
ALTER TABLE `OrderRequestDetail` ADD CONSTRAINT `OrderRequestDetail_prodCd_fkey` FOREIGN KEY (`prodCd`) REFERENCES `Product`(`prodCd`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_makerCd_fkey` FOREIGN KEY (`makerCd`) REFERENCES `Maker`(`makerCd`) ON DELETE RESTRICT ON UPDATE CASCADE;
