import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UsersRepository } from 'src/users/users.repository';
import { UsersService } from 'src/users/users.service';
import { TasksService } from './tasks.service';

@Module({
  providers: [TasksService, UsersService, UsersRepository, PrismaService],
})
export class TasksModule {}
