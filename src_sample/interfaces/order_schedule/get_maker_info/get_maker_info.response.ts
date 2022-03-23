import { Field, InputType } from '@nestjs/graphql';
import { Authority } from '@prisma/client';

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
  // @Field()
  // cursor?: Prisma.UserWhereUniqueInput;
}
