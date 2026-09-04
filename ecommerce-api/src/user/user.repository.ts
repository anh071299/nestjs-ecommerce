import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import type { CreateUserDto } from './dto/create-user.dto.js';
import type { User } from './user.types.js';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateUserDto): Promise<User> {
    return this.prisma.db.orm.public.User.create(data);
  }

  findById(id: string): Promise<User | null> {
    return this.prisma.db.orm.public.User.where({ id }).first();
  }

  findByEmail(email: string): Promise<User | null> {
    return this.prisma.db.orm.public.User.where({ email }).first();
  }
}
