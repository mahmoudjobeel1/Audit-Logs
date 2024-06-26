import fastify from 'fastify';
import { eventRoutes } from './api/controllers/event.controller';

export const app = fastify({ logger: false });


app.register(require('@fastify/cors'), {
  origin: ['http://localhost:3000', 'https://audit-logs-frontend.onrender.com']
});

app.get('/', async (request, reply) => {
  return { message: 'Hello, World!' };
});


eventRoutes(app);

const PORT = process.env.PORT || 5000 ;
app.listen(PORT , process.env.HOST || '::' ,() => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});

