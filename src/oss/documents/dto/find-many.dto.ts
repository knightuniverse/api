import { IsNumberString, IsOptional } from 'class-validator';

export class FindManyQueryDto {
  @IsOptional()
  @IsNumberString()
  organizationId?: string;

  @IsOptional()
  @IsNumberString()
  page?: string;

  @IsOptional()
  @IsNumberString()
  pageSize?: string;
}
