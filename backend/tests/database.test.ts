import {PrismaClient } from '@prisma/client';

const primsa = new PrismaClient();

describe('prisma database connection' , () =>{
    test('database connection without errors', async () =>{
       await expect(primsa.$connect()).resolves.not.toThrow();
    })

    afterAll(async () => {
        await primsa.$disconnect();
    });
})