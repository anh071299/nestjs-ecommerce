import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../user/entities/user.entity.js';
import { AuthService } from './auth.service.js';
import { CurrentUser } from './decorators/current-user.decorator.js';
import { loginSchema, type LoginDto } from './dto/login.dto.js';
import { JwtGuard } from './guard/jwt.guard.js';
import { Public } from './decorators/public-guard.decorator.js';
import { type RefreshTokenDto, refreshTokenSchema } from './dto/refresh-token.dto.js';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService, private readonly jwtService: JwtService) {}
    @Post('login')
    async login(@Body({ schema: loginSchema }) loginDto: LoginDto) {
        return await this.authService.login(loginDto.email, loginDto.password);
    }

    @Get('me')
    @UseGuards(JwtGuard)
    async getMe(@CurrentUser() user: UserEntity) {
       return user;
    }

    @Public()
    @Post('refresh-token')
    async refreshToken(@Body({ schema: refreshTokenSchema }) refreshTokenDto: RefreshTokenDto) {
        return await this.authService.refreshToken(refreshTokenDto.refreshToken);
    }

    @Post('logout')
    @UseGuards(JwtGuard)
    async logout(@CurrentUser() user: UserEntity) {
        return await this.authService.logout(user.id);
    }
}
