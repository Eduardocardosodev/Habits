// Back-end API restFull

import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';
import cors from '@fastify/cors';

const app = Fastify();
const prismaClient = new PrismaClient();
app.register(cors);

app.get('/', async () => {
  const habits = await prismaClient.habit.findMany();

  return 'Hello word';
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(`Server runinng `);
  });
