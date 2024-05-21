import { QFYApiException } from '@/lib/qfy-api-exception';
import { QFYApiResponse } from '@/lib/qfy-api-response';
import { Body, Controller, Headers, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Public } from './auth.guard';
import { AuthService } from './auth.service';
import { SignInCredential } from './dto/sign-in-credential.dto';

function extractToken(authorization: string): string | undefined {
  const [type, token] = authorization.split(' ');
  return type === 'Bearer' ? token : undefined;
}

@Controller('oss/auth')
export class AuthController {
  constructor(
    private readonly signInService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('refresh')
  async refresh(@Headers('authorization') authorization: string) {
    const token = extractToken(authorization);
    if (!token) {
      return QFYApiResponse.create({
        code: QFYApiException.badRequest.code,
        data: {},
        desc: QFYApiException.badRequest.desc,
      });
    }

    const payload = this.jwtService.decode(token);
    const accessToken = this.jwtService.sign({
      sub: payload.sub,
      name: payload.name,
    });
    return QFYApiResponse.create({
      code: 201,
      data: {
        accessToken,
        id: payload.sub,
      },
      desc: '',
    });
  }

  @Public()
  @Post('sign-in')
  async signIn(@Body() credential: SignInCredential) {
    try {
      const operator = await this.signInService.signIn(credential);

      // TODO JWT 过期的问题
      const payload = {
        sub: operator.id,
        name: operator.name,
      };

      return QFYApiResponse.create({
        code: 201,
        data: {
          accessToken: await this.jwtService.signAsync(payload),
          id: operator.id,
        },
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
