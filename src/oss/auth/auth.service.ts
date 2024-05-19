import { QFYApiException } from '@/lib/qfy-api-exception';
import { OperatorsService } from '@/oss/operators/operators.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { SignInCredential } from './dto/sign-in-credential.dto';

@Injectable()
export class AuthService {
  constructor(private operatorsService: OperatorsService) {}

  async signIn(credential: SignInCredential) {
    const { password, phone } = credential;

    const operator = await this.operatorsService.findUniqueByPhone(phone);
    if (!operator) {
      throw QFYApiException.operatorNotFound;
    }

    if (!bcrypt.compareSync(password, operator.password)) {
      throw QFYApiException.wrongPassword;
    }

    return operator;
  }
}
