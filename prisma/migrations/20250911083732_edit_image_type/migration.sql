/*
  Warnings:

  - Made the column `image` on table `Room` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Room" ALTER COLUMN "image" SET NOT NULL;
