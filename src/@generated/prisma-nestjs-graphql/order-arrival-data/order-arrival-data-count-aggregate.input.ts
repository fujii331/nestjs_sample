import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderArrivalDataCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  prodCd?: true;

  @Field(() => Boolean, { nullable: true })
  orderQuantity?: true;

  @Field(() => Boolean, { nullable: true })
  deliveryDate?: true;

  @Field(() => Boolean, { nullable: true })
  deliveryPort?: true;

  @HideField()
  createdAt?: true;

  @HideField()
  updatedAt?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}
