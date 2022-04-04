import { Field, InputType } from '@nestjs/graphql';
import { Authority } from '../../../src/@generated/prisma-nestjs-graphql/prisma/authority.enum';
import { UserWhereUniqueInput } from '../../../src/@generated/prisma-nestjs-graphql/user/user-where-unique.input';

@InputType()
class UsersWhereInput {
  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  authority?: Authority;
}

@InputType()
export class UsersInput {
  @Field(() => UsersWhereInput, { nullable: true })
  usersWhereInput: UsersWhereInput;

  @Field(() => Number, { nullable: true })
  skip?: number;

  @Field(() => Number, { nullable: true })
  take?: number;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: UserWhereUniqueInput;
}
