import { PartialType } from '@nestjs/mapped-types';
import { CreateSignOutDto } from './create-sign-out.dto';

export class UpdateSignOutDto extends PartialType(CreateSignOutDto) {}
