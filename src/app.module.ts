import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { ApolloDriver } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './tasks/tasks.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthoritiesGuard } from '../src/common/guards/authorities.guard';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LoggingPlugin } from './common/plugins/logging.plugin';
import { ComplexityPlugin } from './common/plugins/complexity.plugin';
import { OrderEntriesModule } from './modules/order-entries.module';
import { PassportModule } from '@nestjs/passport';
import { GoogleOauthModule } from './auth/google/google-oauth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // formatError: (error) => {
      //   console.log(error);
      //   return error;
      // },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    ScheduleModule.forRoot(),
    UsersModule,
    OrderEntriesModule,
    AuthModule,
    TasksModule,
    GoogleOauthModule,
  ],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AuthoritiesGuard,
    },
    LoggingPlugin,
    ComplexityPlugin,
  ],
})
export class AppModule {}
