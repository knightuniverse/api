import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import extension from 'prisma-paginate';

export const PRISMA_INJECTION_TOKEN = 'PrismaService';

export type PrismaService = ReturnType<BasePrismaService['withExtensions']>;

export class BasePrismaService extends PrismaClient implements OnModuleInit {
  // ... optionally, a constructor that performs custom connection or middleware setup

  withExtensions() {
    return this.$extends(extension);
  }

  // ... startup + shutdown hooks omitted

  async onModuleInit() {
    // Note: this is optional
    await this.$connect();
  }
}
