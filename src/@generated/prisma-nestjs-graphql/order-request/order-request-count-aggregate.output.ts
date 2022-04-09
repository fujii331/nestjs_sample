import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class OrderRequestCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  containerNo!: number;

  @Field(() => Int, { nullable: false })
  orderRequestNo!: number;

  @Field(() => Int, { nullable: false })
  deliveryDate!: number;

  @Field(() => Int, { nullable: false })
  poRequestDate!: number;

  @Field(() => Int, { nullable: false })
  deliveryPort!: number;

  @Field(() => Int, { nullable: false })
  poStatus!: number;

  @Field(() => Int, { nullable: false })
  discarded!: number;

  @HideField()
  createdAt!: number;

  @HideField()
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  OrderEntryId!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
