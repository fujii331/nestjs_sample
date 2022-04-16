import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from '../auth.module';
import { GoogleOauthStrategy } from '../strategies/google-oauth.strategy';
import { GoogleOauthController } from './google-oauth.controller';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [GoogleOauthController],
  providers: [GoogleOauthStrategy],
})
export class GoogleOauthModule {}
