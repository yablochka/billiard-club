# Backend for billiard-club

This directory contains the backend foundation for the "billiard-club" internal application.

Quick start

1. Install dependencies:

```bash
cd backend
npm install
```

2. Development (restart on change):

```bash
npm run dev
```

3. Build:

```bash
npm run build
```

4. Run built app:

```bash
npm start
```

Endpoints

- GET /api/health — returns { "status": "ok" }

Notes

- Environment variables must be provided via .env (do not commit secrets). See `.env.example` for placeholders.
- This initial commit sets up Fastify + TypeScript and a health endpoint. Prisma, authentication and business logic will be added in subsequent PRs.
