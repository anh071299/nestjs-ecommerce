import { Body, Controller, Post } from '@nestjs/common';
import { createUserSchema, type CreateUserDto } from './dto/create-user.dto.js';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  createUser(@Body({ schema: createUserSchema }) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

}
