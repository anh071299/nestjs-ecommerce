import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { UserController } from './user.controller.js';
import { UserRepository } from './user.repository.js';
import { UserService } from './user.service.js';

@Module({
  imports: [PrismaModule],
  providers: [UserRepository, UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
