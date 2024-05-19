import { PartialType } from '@nestjs/mapped-types';
import { CreateTtMiniAppUserPhoneDto } from './create-tt-mini-app-user-phone.dto';

export class UpdateTtMiniAppUserPhoneDto extends PartialType(CreateTtMiniAppUserPhoneDto) {}
