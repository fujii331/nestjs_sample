import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-custom';
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtForTestStrategy extends PassportStrategy(
  Strategy,
  'jwt-for-test',
) {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  // emailを設定していなかったらそのまま返す
  // 権限が必要なユーザーを認証する場合はemailを設定する必要がある
  public async validate(req: Request): Promise<User | null> {
    console.log('確認でaaaす');
    console.log(req.cookies.testEmail);
    const email = req.get('TestEmail');
    if (!email) {
      return null;
    }

    const user = this.usersService.findUniqueUser({
      email: email,
    });

    if (!user) {
      throw new Error(
        'ユーザーが取得できません。処理前にユーザーの作成をしてください。',
      );
    }

    return user;
  }
}
