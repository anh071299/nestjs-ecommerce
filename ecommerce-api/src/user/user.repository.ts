import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { CreateUserDto } from "./dto/create-user.dto.js";
import type { User } from "./user.types.js";
import * as argon2 from 'argon2';
@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({ data: { ...data, password: await argon2.hash(data.password) } });
  }

  findById(id: string): Promise<User | null> {
    return this.prisma.user.findFirst({ where: { id } });
  }

  findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
