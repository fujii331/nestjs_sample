import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/prisma.service';
import { UsersRepository } from './users.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UsersModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [UsersService, UsersResolver, UsersRepository, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
