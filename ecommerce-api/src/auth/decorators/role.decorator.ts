import { SetMetadata } from "@nestjs/common";
import { UserRole } from "../../user/user.types.js";

export const ROLES_KEY = 'roles';
export const Role = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);