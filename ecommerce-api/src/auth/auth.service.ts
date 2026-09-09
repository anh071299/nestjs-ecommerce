import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import * as crypto from 'crypto';
import { PrismaService } from '../prisma/prisma.service.js';
import { UserService } from '../user/user.service.js';
import { Role, ROLES, ROLES_KEY } from './decorators/role.decorator.js';

const REFRESH_TOKEN_EXPIRATION_TIME = 7 * 24 * 60 * 60 * 1000;
const ACCESS_TOKEN_EXPIRATION_TIME: JwtSignOptions['expiresIn'] = '15m';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly prisma: PrismaService, private readonly jwtService: JwtService) {}
    async login(email: string, password: string) {
        const user = await this.userService.findByEmail(email);

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isPasswordValid = await argon2.verify(user.password, password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const accessToken = await this.jwtService.signAsync({ sub: user.id, email: user.email }, { expiresIn: ACCESS_TOKEN_EXPIRATION_TIME });
        const refreshToken = await this.createRefreshToken(user.id);

   
        if (!accessToken || !refreshToken) {
            throw new Error('Failed to create access or refresh token');
        }

        return { accessToken, refreshToken: refreshToken.token };
    }

    async register(email: string, password: string, confirmPassword: string, name: string) {
        if (password !== confirmPassword) {
            throw new BadRequestException('Passwords do not match');
        }
        const user = await this.userService.findByEmail(email);
        if (user) {
            throw new BadRequestException('User already exists');
        }
        const hashedPassword = await argon2.hash(password);
        await this.userService.create({ email, password: hashedPassword, name, role: 'USER'});
        return { message: 'User registered successfully' };
    }

    async refreshToken(refreshToken: string) {
        const hashedRefreshToken = crypto.createHash('sha256').update(refreshToken).digest('hex');
        const refreshTokenEntity = await this.prisma.refreshToken.findUnique({
            where: {
                token: hashedRefreshToken,
            },
        });

        if (!refreshTokenEntity) {
            throw new UnauthorizedException('Invalid refresh token');
        }

        if (refreshTokenEntity.isRevoked) {
            throw new UnauthorizedException('Refresh token revoked');
        }

        if (refreshTokenEntity.expiresAt < new Date()) {
            throw new UnauthorizedException('Refresh token expired');
        }


        const user = await this.userService.findById(refreshTokenEntity.userId);

        if (!user) {
          throw new UnauthorizedException('User not found');
        }
      
        // Revoke the old refresh token
        await this.prisma.refreshToken.update({
            where: { id: refreshTokenEntity.id },
            data: { isRevoked: true },
        });

        // Create a new refresh token
        const newRefreshToken = await this.createRefreshToken(user.id);


        // Create a new access token
        const accessToken = await this.jwtService.signAsync(
          {
            sub: user.id,
            email: user.email,
          },
          {
            expiresIn: ACCESS_TOKEN_EXPIRATION_TIME,
          },
        );       
        return { accessToken, refreshToken: newRefreshToken.token };
  
    }

    async logout(userId: string) {
        await this.prisma.refreshToken.updateMany({
            where: { userId },
            data: { isRevoked: true },
        });
        return { message: 'Logged out successfully' };
    }

    async createRefreshToken(userId: string) {
        const rawRefreshToken = crypto.randomBytes(32).toString('hex');
        const hashedRefreshToken = crypto.createHash('sha256').update(rawRefreshToken).digest('hex');
        await this.prisma.refreshToken.create({
            data: { userId, token: hashedRefreshToken, expiresAt: new Date(Date.now() + REFRESH_TOKEN_EXPIRATION_TIME), isRevoked: false },
        });

        return {
            token: rawRefreshToken,
            hash: hashedRefreshToken,
        }
    }
}