import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderRequestMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  containerNo?: true;

  @Field(() => Boolean, { nullable: true })
  orderRequestNo?: true;

  @Field(() => Boolean, { nullable: true })
  deliveryDate?: true;

  @Field(() => Boolean, { nullable: true })
  poRequestDate?: true;

  @Field(() => Boolean, { nullable: true })
  deliveryPort?: true;

  @Field(() => Boolean, { nullable: true })
  poStatus?: true;

  @Field(() => Boolean, { nullable: true })
  discarded?: true;

  @HideField()
  createdAt?: true;

  @HideField()
  updatedAt?: true;

  @Field(() => Boolean, { nullable: true })
  OrderEntryId?: true;
}
