import { Injectable } from '@nestjs/common';
import { User } from '../../src/@generated/prisma-nestjs-graphql/user/user.model';
import { CreateOneUserArgs } from '../../src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { UsersInput } from './dto/users.input';
import { UsersRepository } from './users.repository';
import { FirstUserInput } from './dto/first-user.input';
import { UserWhereUniqueInput } from '../../src/@generated/prisma-nestjs-graphql/user/user-where-unique.input';
import { UpdateOneUserArgs } from '../../src/@generated/prisma-nestjs-graphql/user/update-one-user.args';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async findUsers(args: UsersInput): Promise<User[] | null> {
    return this.repository.findUsers(args);
  }

  async findFirstUser(args: FirstUserInput): Promise<User | null> {
    return this.repository.findFirstUser(args);
  }

  async findUniqueUser(args: UserWhereUniqueInput): Promise<User | null> {
    return this.repository.findUniqueUser(args);
  }

  async createUser(args: CreateOneUserArgs): Promise<User> {
    return this.repository.createUser(args);
  }

  async updateUser(args: UpdateOneUserArgs): Promise<User> {
    return this.repository.updateUser(args);
  }
}
