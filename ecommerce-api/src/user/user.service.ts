import { Injectable } from '@nestjs/common';
import type { CreateUserDto } from './dto/create-user.dto.js';
import { UserRepository } from './user.repository.js';
import type { User } from './user.types.js';

@Injectable()
export class UserService {
  constructor(private readonly users: UserRepository) {}

  create(data: CreateUserDto): Promise<User> {
    return this.users.create(data);
  }

  findById(id: string): Promise<User | null> {
    return this.users.findById(id);
  }

  findByEmail(email: string): Promise<User | null> {
    return this.users.findByEmail(email);
  }
}
