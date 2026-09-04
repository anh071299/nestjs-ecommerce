import type { User, UserRole } from "../user.types.js";

export class UserEntity {
  id: string;
  email: string;
  password: string;
  name: string;
  role: UserRole;

  constructor(data: User) {
    this.id = data.id;
    this.email = data.email;
    this.password = data.password;
    this.name = data.name;
    this.role = data.role as UserRole;
  }
}