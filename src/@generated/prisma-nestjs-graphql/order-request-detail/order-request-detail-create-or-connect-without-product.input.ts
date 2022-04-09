import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { OrderRequestDetailCreateWithoutProductInput } from './order-request-detail-create-without-product.input';

@InputType()
export class OrderRequestDetailCreateOrConnectWithoutProductInput {
  @Field(() => OrderRequestDetailWhereUniqueInput, { nullable: false })
  where!: OrderRequestDetailWhereUniqueInput;

  @Field(() => OrderRequestDetailCreateWithoutProductInput, { nullable: false })
  create!: OrderRequestDetailCreateWithoutProductInput;
}
