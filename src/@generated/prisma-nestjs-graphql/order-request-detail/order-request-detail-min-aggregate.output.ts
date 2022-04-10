import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class OrderRequestDetailMinAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  prodCd?: string;

  @Field(() => Int, { nullable: true })
  orderQuantity?: number;

  @Field(() => Float, { nullable: true })
  ssp?: number;

  @Field(() => Float, { nullable: true })
  cbm?: number;

  @Field(() => Boolean, { nullable: true })
  wasOrderAlerted?: boolean;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => Int, { nullable: true })
  orderRequestId?: number;
}
