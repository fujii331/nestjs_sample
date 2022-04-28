import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Authority } from '../../../src/@generated/prisma-nestjs-graphql/prisma/authority.enum';
import { UsersService } from '../../users/users.service';

@Injectable()
export class GoogleOauthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {
    super({
      clientID: process.env.OAUTH_GOOGLE_ID,
      clientSecret: process.env.OAUTH_GOOGLE_SECRET,
      callbackURL: process.env.OAUTH_GOOGLE_REDIRECT_URL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
  ): Promise<any> {
    const { name, emails } = profile;

    const email = emails[0].value;
    const fullName = name.familyName + name.givenName;

    const user = await this.authService.validateGoogleUser(email);

    if (!user) {
      return await this.userService.createUser({
        data: {
          email: email,
          password: 'password',
          name: fullName,
          authority: Authority.FIRST,
        },
      });
    }

    return user;
  }
}
