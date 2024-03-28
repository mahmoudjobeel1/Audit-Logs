import { PrismaClient } from "@prisma/client";
import { CreateEventInput } from "../types/event.type";

export class EventService{
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async create(eventData: CreateEventInput){
        return this.prisma.event.create({
            data:  eventData,
            include: {
                action: true,
            },
        });
    }
}