import { object, output, string } from "zod";

export const refreshTokenSchema = object({
    refreshToken: string().min(1),
});

export type RefreshTokenDto = output<typeof refreshTokenSchema>;    
