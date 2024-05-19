import { PartialType } from '@nestjs/mapped-types';
import { CreateTtMiniAppDto } from './create-tt-mini-app.dto';

export class UpdateTtMiniAppDto extends PartialType(CreateTtMiniAppDto) {}
