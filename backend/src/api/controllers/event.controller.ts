import { EventService } from "../services/event.service";
import { CreateEventInput, getEventsInput } from "../types/event.type";

export async function eventRoutes(app){
    const eventService = new EventService();

    app.post('/create_event', async (req, res) => {
        try{
            const event = await eventService.create(req.body as CreateEventInput);
            return res.code(201).send(event);
        }catch(err){
            return res.code(500).send(err);
        }
    });

    app.get('/events', async (req, res) => {
        try{
            const events = await eventService.getEvents(req.query as getEventsInput);
            return res.code(200).send(events);
        }catch(err){
            return res.code(500).send(err);
        }
    });
}