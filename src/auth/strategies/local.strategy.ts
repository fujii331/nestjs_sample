import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from '../../../src/@generated/prisma-nestjs-graphql/user/user.model';
import { AuthService } from '../../../src/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email', passwordField: 'secret' });
  }

  async validate(email: string, secret: string): Promise<any> {
    const user = await this.authService.validateUser(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    return { data: user, secret };
  }
}
