/*
  Warnings:

  - You are about to drop the `OrderEntry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `OrderEntry`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `ユーザー` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `hashedRefreshToken` VARCHAR(191) NULL,
    `authority` ENUM('FIRST', 'SECOND', 'THIRD') NOT NULL DEFAULT 'THIRD',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ユーザー_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `発注申し込み` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `メーカーコード` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `発注稟議` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `コンテナ番号` INTEGER NOT NULL,
    `発注稟議番号` VARCHAR(191) NOT NULL,
    `配送日` DATE NOT NULL,
    `PO申請日` DATE NOT NULL,
    `配送港` ENUM('INZAI', 'TOYOKAWA', 'KOBE', 'MOJI', 'OTHER') NOT NULL DEFAULT 'OTHER',
    `POステータス` ENUM('NOTISSUED', 'ISSUED') NOT NULL DEFAULT 'NOTISSUED',
    `破棄フラグ` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `OrderEntryId` INTEGER NOT NULL,

    INDEX `発注稟議_配送日_idx`(`配送日`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `発注稟議詳細` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `商品コード` VARCHAR(191) NOT NULL,
    `発注数` INTEGER NOT NULL,
    `SSP` DOUBLE NULL,
    `CBM` DOUBLE NULL,
    `発注アラート実施フラグ` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `OrderRequestId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `メーカー` (
    `メーカーコード` VARCHAR(191) NOT NULL,
    `メーカー名` VARCHAR(191) NOT NULL,
    `リードタイム` INTEGER NOT NULL,
    `isValid` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `メーカー_メーカーコード_key`(`メーカーコード`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `商品` (
    `商品コード` VARCHAR(191) NOT NULL,
    `商品名` VARCHAR(191) NOT NULL,
    `180日SSP` DOUBLE NULL,
    `3辺サイズ` DOUBLE NULL,
    `最小発注数` INTEGER NOT NULL,
    `isValid` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `商品_商品コード_key`(`商品コード`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `発注入荷データ` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `商品コード` VARCHAR(191) NOT NULL,
    `発注数` INTEGER NOT NULL,
    `配送日` DATE NULL,
    `配送港` ENUM('INZAI', 'TOYOKAWA', 'KOBE', 'MOJI', 'OTHER') NOT NULL DEFAULT 'OTHER',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `発注申し込み` ADD CONSTRAINT `発注申し込み_メーカーコード_fkey` FOREIGN KEY (`メーカーコード`) REFERENCES `メーカー`(`メーカーコード`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `発注稟議` ADD CONSTRAINT `発注稟議_OrderEntryId_fkey` FOREIGN KEY (`OrderEntryId`) REFERENCES `発注申し込み`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `発注稟議詳細` ADD CONSTRAINT `発注稟議詳細_OrderRequestId_fkey` FOREIGN KEY (`OrderRequestId`) REFERENCES `発注稟議`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `発注稟議詳細` ADD CONSTRAINT `発注稟議詳細_商品コード_fkey` FOREIGN KEY (`商品コード`) REFERENCES `商品`(`商品コード`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `発注入荷データ` ADD CONSTRAINT `発注入荷データ_商品コード_fkey` FOREIGN KEY (`商品コード`) REFERENCES `商品`(`商品コード`) ON DELETE RESTRICT ON UPDATE CASCADE;
