import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestWhereInput } from './order-request-where.input';

@InputType()
export class OrderRequestListRelationFilter {
  @Field(() => OrderRequestWhereInput, { nullable: true })
  every?: OrderRequestWhereInput;

  @Field(() => OrderRequestWhereInput, { nullable: true })
  some?: OrderRequestWhereInput;

  @Field(() => OrderRequestWhereInput, { nullable: true })
  none?: OrderRequestWhereInput;
}
