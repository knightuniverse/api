import { QFYApiException } from '@/constants/qfy-api-exception';
import { QFYApiResponse } from '@/constants/qfy-api-response';
import { Body, Controller, Post } from '@nestjs/common';
import { OperatorDto } from './dto/operator.dto';
import { SignInCredential } from './dto/sign-in-credential.dto';
import { SignInService } from './sign-in.service';

@Controller('sign-in')
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  @Post()
  async signIn(@Body() credential: SignInCredential) {
    try {
      const operator = await this.signInService.signIn(credential);
      const dto = new OperatorDto();
      dto.id = operator.id;
      dto.name = operator.name;
      return QFYApiResponse.create({
        code: 201,
        data: dto,
        desc: '',
      });
    } catch (error) {
      console.error(error);

      if (error instanceof QFYApiException) {
        const wrongPassword = QFYApiException.wrongPassword;
        switch (error.code) {
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
