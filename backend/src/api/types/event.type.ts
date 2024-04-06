import { ObjectType, Prisma } from '@prisma/client';

export type CreateEventInput = {
  object: ObjectType;
  actorId: string;
  actorName: string;
  group: string;
  targetId: string;
  targetName: string;
  location: string;
  occurredAt: Date;
  metadata: Prisma.JsonValue;
  action: {
    create:{
        object: ObjectType;
        name: string;
    }
  }
};


export type getEventsInput = {
  id?: string;
  actorId?: string;
  actorName?: string;
  group?: string;
  targetId?: string;
  targetName?: string;
  actionName?: string;
  occurredAtStart?: string;
  occurredAtEnd?: string;
  searchText?: string;
  limit?: number;
  lastEventId?: string;
}

