import { PRISMA_INJECTION_TOKEN, PrismaService } from '@/shared/prisma.service';
import { Inject, Injectable } from '@nestjs/common';

import { CreateOperatorDto } from './dto/create-operator.dto';
import { UpdateOperatorDto } from './dto/update-operator.dto';

@Injectable()
export class OperatorsService {
  constructor(@Inject(PRISMA_INJECTION_TOKEN) private prisma: PrismaService) {}

  create(createOperatorDto: CreateOperatorDto) {
    return 'This action adds a new operator';
  }

  findAll() {
    return `This action returns all operators`;
  }

  findOne(id: number) {
    return `This action returns a #${id} operator`;
  }

  async findUniqueByPhone(phoneNumber: string) {
    const operator = await this.prisma.operator.findUnique({
      where: {
        phoneNumber,
      },
    });

    return operator;
  }

  update(id: number, updateOperatorDto: UpdateOperatorDto) {
    return `This action updates a #${id} operator`;
  }

  remove(id: number) {
    return `This action removes a #${id} operator`;
  }
}
