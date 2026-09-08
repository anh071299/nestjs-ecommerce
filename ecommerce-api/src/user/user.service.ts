import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import type { CreateUserDto } from './dto/create-user.dto.js';
import { UserRepository } from './user.repository.js';
import type { User } from './user.types.js';
import { UserEntity } from './entities/user.entity.js';

@Injectable()
export class UserService {
  constructor(private readonly users: UserRepository) {}

  async create(data: CreateUserDto): Promise<UserEntity> {
    const existingUser = await this.users.findByEmail(data.email);
    if (existingUser) {
      console.log(JSON.stringify(existingUser, null, 2));
      throw new ConflictException('User already exists');
    }
    const user = await this.users.create(data);
    return new UserEntity(user);
  }

  findById(id: string): Promise<User | null> {
    return this.users.findById(id);
  }

  findByEmail(email: string): Promise<User | null> {
    return this.users.findByEmail(email);
  }


}
