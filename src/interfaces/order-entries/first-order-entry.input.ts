import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FirstOrderEntryInput {
  @Field(() => String, { nullable: true })
  makerCd?: string;

  @Field(() => String, { nullable: true })
  orderRequestNo?: string;

  @Field(() => String, { nullable: true })
  prodCd?: string;
}
