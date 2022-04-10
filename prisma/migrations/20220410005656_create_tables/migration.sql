-- CreateTable
CREATE TABLE `OrderEntry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `makerCd` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `OrderEntry_makerCd_fkey`(`makerCd`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `containerNo` INTEGER NOT NULL,
    `orderRequestNo` VARCHAR(191) NOT NULL,
    `deliveryDate` DATE NOT NULL,
    `poRequestDate` DATE NULL,
    `deliveryPort` ENUM('INZAI', 'TOYOKAWA', 'KOBE', 'MOJI', 'OTHER') NOT NULL DEFAULT 'OTHER',
    `poStatus` ENUM('NOTISSUED', 'ISSUED') NOT NULL DEFAULT 'NOTISSUED',
    `discarded` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `orderEntryId` INTEGER NOT NULL,

    INDEX `OrderRequest_orderEntryId_fkey`(`orderEntryId`),
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
    `orderRequestId` INTEGER NOT NULL,

    INDEX `OrderRequestDetail_prodCd_fkey`(`prodCd`),
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
    `makerCd` VARCHAR(191) NOT NULL,
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

    INDEX `OrderArrivalData_prodCd_fkey`(`prodCd`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OrderEntry` ADD CONSTRAINT `OrderEntry_makerCd_fkey` FOREIGN KEY (`makerCd`) REFERENCES `Maker`(`makerCd`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderRequest` ADD CONSTRAINT `OrderRequest_orderEntryId_fkey` FOREIGN KEY (`orderEntryId`) REFERENCES `OrderEntry`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderRequestDetail` ADD CONSTRAINT `OrderRequestDetail_orderRequestId_fkey` FOREIGN KEY (`orderRequestId`) REFERENCES `OrderRequest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderRequestDetail` ADD CONSTRAINT `OrderRequestDetail_prodCd_fkey` FOREIGN KEY (`prodCd`) REFERENCES `Product`(`prodCd`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_makerCd_fkey` FOREIGN KEY (`makerCd`) REFERENCES `Maker`(`makerCd`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderArrivalData` ADD CONSTRAINT `OrderArrivalData_prodCd_fkey` FOREIGN KEY (`prodCd`) REFERENCES `Product`(`prodCd`) ON DELETE RESTRICT ON UPDATE CASCADE;
