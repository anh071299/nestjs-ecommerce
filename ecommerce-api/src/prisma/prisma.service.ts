import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { createPrismaClient, type PrismaClient } from './db.js';

@Injectable()
export class PrismaService implements OnModuleDestroy {
  readonly db: PrismaClient = createPrismaClient();

  async onModuleDestroy(): Promise<void> {
    await this.db.close();
  }
}
