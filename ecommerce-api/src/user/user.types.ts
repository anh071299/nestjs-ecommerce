import type { FieldOutputTypes } from '../prisma/user.js';

export type User = FieldOutputTypes['public']['User'];

export const USER_ROLES = ['USER', 'ADMIN'] as const;
export type UserRole = (typeof USER_ROLES)[number];
