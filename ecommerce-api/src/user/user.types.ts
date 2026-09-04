import type { User as PrismaUser } from "@prisma/client";

export const USER_ROLES = ["USER", "ADMIN"] as const;

export type User = PrismaUser;
export type UserRole = (typeof USER_ROLES)[number];
