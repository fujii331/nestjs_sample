import {
  Controller,
  Get,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { User } from '../../../src/@generated/prisma-nestjs-graphql/user/user.model';
import { Request } from 'express';
import { AuthService } from '../auth.service';
import { GoogleOauthGuard } from '../guards/google-oauth.guard';
import { Authority } from '../../../src/@generated/prisma-nestjs-graphql/prisma/authority.enum';
import { LoginResponse } from '../dto/login-response';
import { SkipAuth } from '../../common/decorators/metadata/skip_auth.metadata';

@Controller('google')
export class GoogleOauthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(GoogleOauthGuard)
  @SkipAuth()
  async googleAuth() {
    // Guard redirects
  }

  @Get('redirect')
  @UseGuards(GoogleOauthGuard)
  @SkipAuth()
  async googleAuthRedirect(@Req() req: Request): Promise<LoginResponse> {
    const user = req.user as User;
    if (user.authority === Authority.FIRST) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user);
  }
}
