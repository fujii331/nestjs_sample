import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../src/prisma.service';
import { User } from '../../src/@generated/prisma-nestjs-graphql/user/user.model';
import { CreateOneUserArgs } from '../../src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { UsersInput } from './dto/users.input';
import { FirstUserInput } from './dto/first-user.input';
import { UserWhereUniqueInput } from '../../src/@generated/prisma-nestjs-graphql/user/user-where-unique.input';
import { UpdateOneUserArgs } from '../../src/@generated/prisma-nestjs-graphql/user/update-one-user.args';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}
  // constructor(private prisma: PrismaService) {
  //   prisma.$on<any>('query', (event: Prisma.QueryEvent) => {
  //     console.log('Query: ' + event.query);
  //     console.log('Duration: ' + event.duration + 'ms');
  //   });
  // }

  async findUsers(params: UsersInput): Promise<User[] | null> {
    const { skip, take, usersWhereInput, cursor } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
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
        email: 'asc',
      },
    });
  }

  async findFirstUser(params: FirstUserInput): Promise<User | null> {
    const { email, name, authority } = params;
    return this.prisma.user.findFirst({
      where: {
        OR: [
          {
            email: { contains: email },
          },
          {
            name: { contains: name },
          },
          {
            authority: { equals: authority },
          },
        ],
      },
    });
  }

  async findUniqueUser(params: UserWhereUniqueInput): Promise<User | null> {
    const { email, id } = params;

    return this.prisma.user.findUnique({
      where: {
        id,
        email,
      },
    });

    // let user = null;

    // this.prisma.user
    //   .findUnique({
    //     where: {
    //       id,
    //       email,
    //     },
    //   })
    //   .then((result) => {
    //     if (result) {
    //       user = result;
    //     } else {
    //       throw new HttpException(
    //         {
    //           status: HttpStatus.NOT_FOUND,
    //           error: `Missing user(id: ${id}).`,
    //         },
    //         404,
    //       );
    //     }
    //   });

    // return user;
  }

  async createUser(args: CreateOneUserArgs): Promise<User> {
    return this.prisma.user.create(args);
  }

  async updateUser(args: UpdateOneUserArgs): Promise<User> {
    return this.prisma.user.update(args);
  }
}
