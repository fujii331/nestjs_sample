import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { FindFirstUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-first-user.args';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { FindUniqueUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-unique-user.args';
import { UsersInput } from './dto/users.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersRepository {
  // constructor(private readonly prisma: PrismaService) {}
  constructor(private prisma: PrismaService) {
    prisma.$on<any>('query', (event: Prisma.QueryEvent) => {
      console.log('Query: ' + event.query);
      console.log('Duration: ' + event.duration + 'ms');
    });
  }

  async findUsers(params: UsersInput): Promise<User[] | null> {
    const { skip, take, usersWhereInput } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      // cursor,
      where: {
        OR: [
          {
            email: { contains: usersWhereInput.email },
          },
          {
            name: { contains: usersWhereInput.name },
          },
          {
            authority: { equals: usersWhereInput.authority },
          },
        ],
      },
      orderBy: {
        email: 'desc',
      },
    });
  }

  async findFirst(args: FindFirstUserArgs): Promise<User | null> {
    return this.prisma.user.findFirst(args);
  }

  async findUnique(args: FindUniqueUserArgs): Promise<User | null> {
    return this.prisma.user.findUnique(args);
  }

  async createUser(args: CreateOneUserArgs): Promise<User> {
    return this.prisma.user.create(args);
  }
}
