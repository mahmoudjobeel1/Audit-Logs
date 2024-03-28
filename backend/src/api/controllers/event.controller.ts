import { EventService } from "../services/event.service";
import { CreateEventInput } from "../types/event.type";

export async function eventRoutes(app){
    const eventService = new EventService();

    app.post('/create_event', async (req, res) => {
        try{
            console.log(req.body as CreateEventInput);
            const event = await eventService.create(req.body as CreateEventInput);
            return res.code(201).send(event);
        }catch(err){
            return res.code(500).send(err);
        }
    });
}