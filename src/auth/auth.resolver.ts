import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from '../../src/auth/auth.service';
import { LoginResponse } from '../../src/auth/dto/login-response';
import { LoginUserInput } from '../../src/auth/dto/login-user.input';
import { GqlAuthGuard } from '../../src/auth/guards/gql-auth.guard';
import { SkipAuth } from '../../src/common/decorators/metadata/skip_auth.metadata';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  @SkipAuth()
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput, // GqlAuthGuardにて使用
    @Context() context,
  ) {
    return this.authService.login(context.user);
  }

  // ①Authorization:Bearer access_tokenの形でaxiosを叩く
  // ②期限切れの場合,401で返ってくるのでそこでcookieに保存されているrefresh_tokenを再度送信。refreshTokenを叩いてaccess_tokenを返す。
  // ③access_tokenが返って来ればやりたい処理をAuthorization:Bearer access_tokenで送信して終わり
  // refresh_tokenの期限が切れていればログインし直し
  @Mutation(() => LoginResponse)
  @UseGuards(JwtRefreshAuthGuard)
  async refreshToken(@Context() context) {
    return this.authService.refreshToken(
      context.req.user,
      context.req.headers.authorization,
    );
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtRefreshAuthGuard)
  async logout(@Context() context) {
    return this.authService.logout(context.req.user);
  }

  // @Mutation()
  // @UseGuards(AuthGuard('google'))
  // async googleAuth(@Req() req) {}

  // @Get('redirect')
  // @UseGuards(AuthGuard('google'))
  // googleAuthRedirect(@Req() req) {
  //   return this.appService.googleLogin(req)
  // }
}
