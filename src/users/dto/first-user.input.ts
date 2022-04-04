import { Field, InputType } from '@nestjs/graphql';
import { Authority } from '../../../src/@generated/prisma-nestjs-graphql/prisma/authority.enum';

@InputType()
export class FirstUserInput {
  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  authority?: Authority;
}
