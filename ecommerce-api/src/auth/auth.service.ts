import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import * as argon2 from 'argon2';
import * as crypto from 'crypto';
import { PrismaService } from '../prisma/prisma.service.js';
import { UserService } from '../user/user.service.js';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';

const REFRESH_TOKEN_EXPIRATION_TIME = 7 * 24 * 60 * 60 * 1000;
const ACCESS_TOKEN_EXPIRATION_TIME: JwtSignOptions['expiresIn'] = '1m';

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

        const rawRefreshToken = crypto.randomBytes(32).toString('hex');
        const hashedRefreshToken = crypto.createHash('sha256').update(rawRefreshToken).digest('hex');
        const accessToken = await this.jwtService.signAsync({ sub: user.id, email: user.email }, { expiresIn: ACCESS_TOKEN_EXPIRATION_TIME });
        const refreshToken = await this.prisma.refreshToken.create({
            data: {
                userId: user.id,
                token: hashedRefreshToken,
                expiresAt: new Date(Date.now() + REFRESH_TOKEN_EXPIRATION_TIME),
                isRevoked: false,
            },
        }); 

   
        if (!accessToken || !refreshToken) {
            throw new Error('Failed to create access or refresh token');
        }

        return { accessToken, refreshToken: rawRefreshToken };
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
      
        const accessToken = await this.jwtService.signAsync(
          {
            sub: user.id,
            email: user.email,
          },
          {
            expiresIn: ACCESS_TOKEN_EXPIRATION_TIME,
          },
        );       
        return { accessToken };
  
    }
}