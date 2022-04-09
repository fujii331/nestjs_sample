import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderRequestDetailMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  prodCd?: true;

  @Field(() => Boolean, { nullable: true })
  orderQuantity?: true;

  @Field(() => Boolean, { nullable: true })
  ssp?: true;

  @Field(() => Boolean, { nullable: true })
  cbm?: true;

  @Field(() => Boolean, { nullable: true })
  wasOrderAlerted?: true;

  @HideField()
  createdAt?: true;

  @HideField()
  updatedAt?: true;

  @Field(() => Boolean, { nullable: true })
  OrderRequestId?: true;
}
