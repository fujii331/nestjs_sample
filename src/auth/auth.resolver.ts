import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from '../../src/auth/auth.service';
import { LoginResponse } from '../../src/auth/dto/login-response';
import { GqlAuthGuard } from '../../src/auth/guards/gql-auth.guard';
import { SkipAuth } from '../../src/common/decorators/metadata/skip_auth.metadata';
import { LoginUserArgs } from './dto/login-user.args.';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  @SkipAuth()
  async login(
    @Args() args: LoginUserArgs, // GqlAuthGuardにて使用
    @Context() context,
  ) {
    const tokens = await this.authService.login(context.user.data);
    context.req.res?.cookie('atlasToken', tokens.access_token);
    return tokens;
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
}
