import { Field, InputType } from '@nestjs/graphql';
import { Authority } from '@prisma/client';

@InputType()
export class FirstUserInput {
  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  authority?: Authority;
}
