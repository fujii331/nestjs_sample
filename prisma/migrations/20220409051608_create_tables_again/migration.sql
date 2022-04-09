/*
  Warnings:

  - You are about to drop the `メーカー` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ユーザー` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `商品` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `発注入荷データ` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `発注申し込み` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `発注稟議` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `発注稟議詳細` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `発注入荷データ` DROP FOREIGN KEY `発注入荷データ_商品コード_fkey`;

-- DropForeignKey
ALTER TABLE `発注申し込み` DROP FOREIGN KEY `発注申し込み_メーカーコード_fkey`;

-- DropForeignKey
ALTER TABLE `発注稟議` DROP FOREIGN KEY `発注稟議_OrderEntryId_fkey`;

-- DropForeignKey
ALTER TABLE `発注稟議詳細` DROP FOREIGN KEY `発注稟議詳細_OrderRequestId_fkey`;

-- DropForeignKey
ALTER TABLE `発注稟議詳細` DROP FOREIGN KEY `発注稟議詳細_商品コード_fkey`;

-- DropTable
DROP TABLE `メーカー`;

-- DropTable
DROP TABLE `ユーザー`;

-- DropTable
DROP TABLE `商品`;

-- DropTable
DROP TABLE `発注入荷データ`;

-- DropTable
DROP TABLE `発注申し込み`;

-- DropTable
DROP TABLE `発注稟議`;

-- DropTable
DROP TABLE `発注稟議詳細`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `hashedRefreshToken` VARCHAR(191) NULL,
    `authority` ENUM('FIRST', 'SECOND', 'THIRD') NOT NULL DEFAULT 'THIRD',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderEntry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `makerCd` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `containerNo` INTEGER NOT NULL,
    `orderRequestNo` VARCHAR(191) NOT NULL,
    `deliveryDate` DATE NOT NULL,
    `poRequestDate` DATE NOT NULL,
    `deliveryPort` ENUM('INZAI', 'TOYOKAWA', 'KOBE', 'MOJI', 'OTHER') NOT NULL DEFAULT 'OTHER',
    `poStatus` ENUM('NOTISSUED', 'ISSUED') NOT NULL DEFAULT 'NOTISSUED',
    `discarded` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `OrderEntryId` INTEGER NOT NULL,

    INDEX `OrderRequest_deliveryDate_idx`(`deliveryDate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderRequestDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `prodCd` VARCHAR(191) NOT NULL,
    `orderQuantity` INTEGER NOT NULL,
    `ssp` DOUBLE NULL,
    `cbm` DOUBLE NULL,
    `wasOrderAlerted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `OrderRequestId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Maker` (
    `makerCd` VARCHAR(191) NOT NULL,
    `makerName` VARCHAR(191) NOT NULL,
    `leadtime` INTEGER NOT NULL,
    `isValid` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Maker_makerCd_key`(`makerCd`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `prodCd` VARCHAR(191) NOT NULL,
    `prodName` VARCHAR(191) NOT NULL,
    `ssp180Days` DOUBLE NULL,
    `carton3SideSize` DOUBLE NULL,
    `minOrderQuantity` INTEGER NOT NULL,
    `isValid` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Product_prodCd_key`(`prodCd`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderArrivalData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `prodCd` VARCHAR(191) NOT NULL,
    `orderQuantity` INTEGER NOT NULL,
    `deliveryDate` DATE NULL,
    `deliveryPort` ENUM('INZAI', 'TOYOKAWA', 'KOBE', 'MOJI', 'OTHER') NOT NULL DEFAULT 'OTHER',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OrderEntry` ADD CONSTRAINT `OrderEntry_makerCd_fkey` FOREIGN KEY (`makerCd`) REFERENCES `Maker`(`makerCd`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderRequest` ADD CONSTRAINT `OrderRequest_OrderEntryId_fkey` FOREIGN KEY (`OrderEntryId`) REFERENCES `OrderEntry`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderRequestDetail` ADD CONSTRAINT `OrderRequestDetail_OrderRequestId_fkey` FOREIGN KEY (`OrderRequestId`) REFERENCES `OrderRequest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderRequestDetail` ADD CONSTRAINT `OrderRequestDetail_prodCd_fkey` FOREIGN KEY (`prodCd`) REFERENCES `Product`(`prodCd`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderArrivalData` ADD CONSTRAINT `OrderArrivalData_prodCd_fkey` FOREIGN KEY (`prodCd`) REFERENCES `Product`(`prodCd`) ON DELETE RESTRICT ON UPDATE CASCADE;
