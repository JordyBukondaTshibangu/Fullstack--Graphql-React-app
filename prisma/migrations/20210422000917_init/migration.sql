/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Person` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Person.name_unique" ON "Person"("name");
