import { QFYApiException } from '@/lib/qfy-api-exception';
import { QFYApiResponse } from '@/lib/qfy-api-response';
import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Public } from './auth.guard';
import { AuthService } from './auth.service';
import { SignInCredential } from './dto/sign-in-credential.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly signInService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Public()
  @Post('sign-in')
  async signIn(@Body() credential: SignInCredential) {
    try {
      const operator = await this.signInService.signIn(credential);

      const payload = { sub: operator.id, name: operator.name };
      return QFYApiResponse.create({
        code: 201,
        data: { access_token: await this.jwtService.signAsync(payload) },
        desc: '',
      });
    } catch (error) {
      if (error instanceof QFYApiException) {
        const operatorNotFound = QFYApiException.operatorNotFound;
        const wrongPassword = QFYApiException.wrongPassword;
        switch (error.code) {
          case operatorNotFound.code:
            return QFYApiResponse.create({
              code: operatorNotFound.code,
              data: {},
              desc: operatorNotFound.desc,
            });

          case wrongPassword.code:
            return QFYApiResponse.create({
              code: wrongPassword.code,
              data: {},
              desc: wrongPassword.desc,
            });
        }
      }

      return QFYApiException.serverError;
    }
  }
}
