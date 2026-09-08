import { email,  object, output, string } from "zod";

export const loginSchema = object({
    email: email(),
    password: string().min(8),
});

export type LoginDto = output<typeof loginSchema>;
