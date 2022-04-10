import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrderRequestDetailAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  orderQuantity?: true;

  @Field(() => Boolean, { nullable: true })
  ssp?: true;

  @Field(() => Boolean, { nullable: true })
  cbm?: true;

  @Field(() => Boolean, { nullable: true })
  orderRequestId?: true;
}
