import fastify from 'fastify';

const app = fastify({ logger: true });

app.get('/', async (request, reply) => {
  return { message: 'Hello, World!' };
});

const start = async () => {
  try {
    await app.listen(3000);
    console.log(`Server is running at http://localhost:3000/`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
