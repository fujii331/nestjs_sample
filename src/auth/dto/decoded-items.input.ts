import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class DecodedItemInput {
  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  secretKey: string;
}
