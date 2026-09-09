import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { createUserSchema, type CreateUserDto } from './dto/create-user.dto.js';
import { UserService } from './user.service.js';
import { JwtGuard } from '../auth/guard/jwt.guard.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @UseGuards(JwtGuard)
  createUser(@Body({ schema: createUserSchema }) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

}
