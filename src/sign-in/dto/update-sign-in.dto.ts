import { PartialType } from '@nestjs/mapped-types';
import { SignInCredential } from './sign-in-credential.dto';

export class UpdateSignInDto extends PartialType(SignInCredential) {}
