import { Injectable } from '@nestjs/common';
import { CreateSignOutDto } from './dto/create-sign-out.dto';
import { UpdateSignOutDto } from './dto/update-sign-out.dto';

@Injectable()
export class SignOutService {
  signOut(createSignOutDto: CreateSignOutDto) {
    return 'This action adds a new signOut';
  }

  findAll() {
    return `This action returns all signOut`;
  }

  findOne(id: number) {
    return `This action returns a #${id} signOut`;
  }

  update(id: number, updateSignOutDto: UpdateSignOutDto) {
    return `This action updates a #${id} signOut`;
  }

  remove(id: number) {
    return `This action removes a #${id} signOut`;
  }
}
