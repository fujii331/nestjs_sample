import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { User } from '../../../src/@generated/prisma-nestjs-graphql/user/user.model';
import { UsersService } from '../../../src/users/users.service';
import { JwtPayload } from '../types/jwt-payload.type';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: JwtStrategy.extractJWT,
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload): Promise<User | null> {
    const user = this.usersService.findUniqueUser({
      email: payload.email,
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }

  private static extractJWT(req: Request): string | null {
    if (req.cookies && 'atlasToken' in req.cookies) {
      return req.cookies.atlasToken;
    }
    return null;
  }
}
