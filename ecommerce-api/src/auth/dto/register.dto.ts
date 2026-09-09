import { email, object, string } from "zod";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    confirmPassword: string;    

    @IsString()
    @IsNotEmpty()
    name: string;
}

export const registerSchema = object({
    email: email(),
    password: string().min(8),
    confirmPassword: string().min(8),
    name: string(),
});
