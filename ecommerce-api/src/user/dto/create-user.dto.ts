import { z } from 'zod';
import { USER_ROLES } from '../user.types.js';

export const createUserSchema = z
  .object({
    email: z.email(),
    password: z.string().min(8),
    name: z.string().min(1),
    role: z.enum(USER_ROLES).optional(),
  })
  .strict();

export type CreateUserDto = z.infer<typeof createUserSchema>;
