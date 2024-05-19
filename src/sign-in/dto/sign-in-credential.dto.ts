import { IsNotEmpty } from 'class-validator';

export class SignInCredential {
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  phone: string;
}
