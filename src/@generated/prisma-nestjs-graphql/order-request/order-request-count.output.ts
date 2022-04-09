import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderRequestCount {
  @Field(() => Int, { nullable: false })
  OrderRequestDetail?: number;
}
