import { Body, Controller, Post } from '@nestjs/common';
import { CreateSignOutDto } from './dto/create-sign-out.dto';
import { SignOutService } from './sign-out.service';

@Controller('sign-out')
export class SignOutController {
  constructor(private readonly signOutService: SignOutService) {}

  @Post()
  create(@Body() createSignOutDto: CreateSignOutDto) {
    return this.signOutService.signOut(createSignOutDto);
  }
}
