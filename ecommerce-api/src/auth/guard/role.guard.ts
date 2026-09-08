import { Reflector } from "@nestjs/core";
import { CanActivate, ExecutionContext } from "@nestjs/common";
import { UserRole } from "../../user/user.types.js";
import { ROLES_KEY } from "../decorators/role.decorator.js";

export class RoleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [context.getHandler(), context.getClass()]);
        if (!requiredRoles) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.some((role) => user.role === role);
    }
}