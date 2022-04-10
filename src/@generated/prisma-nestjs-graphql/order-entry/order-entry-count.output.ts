import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderEntryCount {
  @Field(() => Int, { nullable: false })
  orderRequest?: number;
}
