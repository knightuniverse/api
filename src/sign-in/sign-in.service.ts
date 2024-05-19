import { QFYApiException } from '@/constants/qfy-api-exception';
import { PRISMA_INJECTION_TOKEN, PrismaService } from '@/shared/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { SignInCredential } from './dto/sign-in-credential.dto';

@Injectable()
export class SignInService {
  constructor(@Inject(PRISMA_INJECTION_TOKEN) private prisma: PrismaService) {}

  async signIn(credential: SignInCredential) {
    const { password, phone } = credential;
    const operator = await this.prisma.operator.findUniqueOrThrow({
      where: {
        phoneNumber: phone,
      },
    });
    if (!bcrypt.compareSync(password, operator.password)) {
      throw QFYApiException.wrongPassword;
    }

    return operator;
  }
}
