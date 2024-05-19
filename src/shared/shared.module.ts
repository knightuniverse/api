import { Global, Module } from '@nestjs/common';

import {
  BasePrismaService,
  PRISMA_INJECTION_TOKEN,
  type PrismaService,
} from './prisma.service';

@Global()
@Module({
  providers: [
    {
      provide: PRISMA_INJECTION_TOKEN,
      useFactory(): PrismaService {
        return new BasePrismaService().withExtensions();
      },
    },
  ],
  exports: [PRISMA_INJECTION_TOKEN],
})
export class SharedModule {}
