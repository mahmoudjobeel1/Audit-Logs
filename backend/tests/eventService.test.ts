import { ObjectType } from '@prisma/client';
import { EventService } from '../src/api/services/event.service';
import {CreateEventInput} from '../src/api/types/event.type';

describe('PrismaService', () => {
  let prismaService: EventService;
  let createEventInput: CreateEventInput;

  beforeAll(() => {
    prismaService = new EventService();
    createEventInput = {
      actorId: 'actor_123',
      actorName: 'Mahmoud Jobeel',
      object: ObjectType.Event,
      group: 'Instatus',
      targetId: 'target_123',
      targetName: 'mahmoudjobeel@gmail.com',
      location: '105.40.62.95',
      occurredAt: new Date(),
      metadata: {},
      action: {
        create: {
          object: ObjectType.Event_Action,
          name: 'user.login_succeeded',
        },
      },
    };
  });

  it('create a new event with the given data', async () => {
    const createSpy = jest.spyOn(prismaService['prisma'].event, 'create').mockResolvedValueOnce({
      id: 'event_123',
      ...createEventInput,
    });

    const result = await prismaService.create(createEventInput);

    expect(createSpy).toHaveBeenCalledWith({ data: createEventInput });
    expect(result).toHaveProperty('id', 'event_123');
    expect(result).toHaveProperty('actorId', createEventInput.actorId);

    createSpy.mockRestore();
  });

});
