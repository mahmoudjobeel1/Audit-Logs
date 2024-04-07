import { PrismaClient } from "@prisma/client";
import { CreateEventInput, getEventsInput } from "../types/event.type";

export class EventService {
  private prisma: PrismaClient;
  private defaultLimit = 10;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(eventData: CreateEventInput) {
    return this.prisma.event.create({
      data: eventData,
      include: {
        action: true,
      },
    });
  }

  async getEvents(eventData: getEventsInput) {
    let { limit = this.defaultLimit, searchText } = eventData;
    
    limit = typeof limit === "string" ? parseInt(limit, 10) : limit;

    const occurredAtStart = eventData.occurredAtStart
      ? new Date(parseInt(eventData.occurredAtStart)).toISOString()
      : undefined;
    const occurredAtEnd = eventData.occurredAtEnd
      ? new Date(parseInt(eventData.occurredAtEnd)).toISOString()
      : undefined;
      
    let filters = {
      id: eventData?.id,
      actorId: eventData?.actorId,
      group: eventData?.group,
      occurredAt: {
        gte: occurredAtStart,
        lte: occurredAtEnd,
      },
    };

    let search = [
      { actorName: { contains: searchText } },
      { group: { contains: searchText } },
      { targetName: { contains: searchText } },
      { action: { name: { contains: searchText } } },
    ];


    let pagination: any = eventData?.lastEventId
      ? {
          take: limit,
          skip: 1,
          cursor: {
            id: eventData.lastEventId,
          },
        }
      : { take: limit };

    const whereClause: any = {
      ...filters,
      OR: search,
    };
    return await this.prisma.event.findMany({
      where: whereClause,
      ...pagination,
      orderBy: { occurredAt: "desc" },
      include: { action: true },
    });
  }
}
