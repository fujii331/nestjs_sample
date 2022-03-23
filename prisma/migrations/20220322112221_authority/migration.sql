/*
  Warnings:

  - You are about to alter the column `authority` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("User_authority")`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `authority` ENUM('FIRST', 'SECOND', 'THIRD') NOT NULL DEFAULT 'THIRD';
