-- CreateEnum
CREATE TYPE "ObjectType" AS ENUM ('Event', 'Event_Action');

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "object" "ObjectType" NOT NULL DEFAULT 'Event',
    "actorId" TEXT NOT NULL,
    "actorName" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "targetName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL,
    "metadata" JSONB NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actions" (
    "id" TEXT NOT NULL,
    "object" "ObjectType" NOT NULL DEFAULT 'Event_Action',
    "name" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "actions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "actions_eventId_key" ON "actions"("eventId");

-- AddForeignKey
ALTER TABLE "actions" ADD CONSTRAINT "actions_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
