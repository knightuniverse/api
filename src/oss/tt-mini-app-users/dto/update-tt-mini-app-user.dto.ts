import { PartialType } from '@nestjs/mapped-types';
import { CreateTtMiniAppUserDto } from './create-tt-mini-app-user.dto';

export class UpdateTtMiniAppUserDto extends PartialType(CreateTtMiniAppUserDto) {}
