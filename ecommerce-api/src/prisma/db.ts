import '../polyfill.js';
import postgres from '@prisma/orm-postgres/runtime';
import type { Contract } from './user.js';
import contractJson from './user.json' with { type: 'json' };

export function createPrismaClient(url = process.env['DATABASE_URL']) {
  return postgres<Contract>({
    contractJson,
    url,
  });
}

export type PrismaClient = ReturnType<typeof createPrismaClient>;
