import { buildApp } from './app';

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = buildApp();

const start = async () => {
  try {
    await app.listen({ port: PORT, host: '0.0.0.0' });
    app.log.info(`Server listening on port ${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
