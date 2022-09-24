import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import { User } from '../../src/@generated/prisma-nestjs-graphql/user/user.model';
import { CreateOneUserArgs } from '../../src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { UsersService } from '../../src/users/users.service';
import { UsersInput } from './dto/users.input';
import { FirstUserInput } from './dto/first-user.input';
import { UserWhereUniqueInput } from '../../src/@generated/prisma-nestjs-graphql/user/user-where-unique.input';
import { SkipAuth } from '../../src/common/decorators/metadata/skip_auth.metadata';
import { Authorities } from '../../src/common/decorators/metadata/authorities.metadata';
import { Authority } from '../../src/@generated/prisma-nestjs-graphql/prisma/authority.enum';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => [User], { nullable: true })
  users(@Args('usersInput') args: UsersInput) {
    return this.userService.findUsers(args);
  }

  @Query(() => User, { nullable: true })
  // @UseGuards(JwtAuthGuard)
  @SkipAuth()
  // @Authorities(Authority.FIRST)
  firstUser(@Args('firstUserInput') args: FirstUserInput) {
    return this.userService.findFirstUser(args);
  }

  @Query(() => User, { nullable: true })
  uniqueUser(@Args('uniqueUserInput') args: UserWhereUniqueInput) {
    return this.userService.findUniqueUser(args);
  }

  @Mutation(() => User)
  @SkipAuth()
  async createUser(@Args() args: CreateOneUserArgs) {
    args.data.password = await bcrypt.hash(args.data.password, 10);
    return this.userService.createUser(args);
  }
}
