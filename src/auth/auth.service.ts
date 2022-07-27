import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../src/users/users.service';
import { User } from '../../src/@generated/prisma-nestjs-graphql/user/user.model';
import * as bcrypt from 'bcrypt';
import { LoginResponse } from '../../src/auth/dto/login-response';
import { Tokens } from './types/tokens.type';
import { JwtPayload } from './types/jwt-payload.type';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string): Promise<User | null> {
    const user = await this.usersService.findUniqueUser({
      email,
    });

    if (user) {
      return user;
    }

    return null;
  }

  async validateGoogleUser(email: string): Promise<User | null> {
    const user = await this.usersService.findUniqueUser({
      email,
    });

    return user;
  }

  async login(user: User): Promise<LoginResponse> {
    const tokens = await this.getTokens(user);
    await this.updateHashedRefreshToken(user, tokens.refresh_token);

    return {
      ...tokens,
      user: user,
    };
  }

  async refreshToken(
    user: User,
    authorization: string,
  ): Promise<LoginResponse> {
    const refreshToken = authorization.replace('Bearer', '').trim();

    if (!bcrypt.compareSync(refreshToken, user.hashedRefreshToken)) {
      throw new UnauthorizedException();
    }

    const tokens = await this.getTokens(user);
    await this.updateHashedRefreshToken(user, tokens.refresh_token);

    return {
      ...tokens,
      user: user,
    };
  }

  async logout(user: User): Promise<boolean> {
    await this.usersService.updateUser({
      where: { id: user.id },
      data: { hashedRefreshToken: { set: null } },
    });

    return true;
  }

  async updateHashedRefreshToken(
    user: User,
    refreshToken: string,
  ): Promise<void> {
    const hashedRefreshToken = bcrypt.hashSync(refreshToken, 10);
    await this.usersService.updateUser({
      where: { id: user.id },
      data: { hashedRefreshToken: { set: hashedRefreshToken } },
    });
  }

  async getTokens(user: User): Promise<Tokens> {
    const payload: JwtPayload = { email: user.email, sub: user.id };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.ACCESS_TOKEN_EXPIRED_IN,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: process.env.REFRESH_TOKEN_EXPIRED_IN,
      }),
    ]);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  // googleLogin(req: { user: any }) {
  //   if (!req.user) {
  //     return 'No user from google';
  //   }

  //   return {
  //     message: 'User information from google',
  //     user: req.user,
  //   };
  // }
}
