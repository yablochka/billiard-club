import { FastifyInstance } from 'fastify';
import Fastify from 'fastify';

export function buildApp(): FastifyInstance {
  const app = Fastify({ logger: true });

  app.get('/api/health', async (_request, _reply) => {
    return { status: 'ok' };
  });

  return app;
}
