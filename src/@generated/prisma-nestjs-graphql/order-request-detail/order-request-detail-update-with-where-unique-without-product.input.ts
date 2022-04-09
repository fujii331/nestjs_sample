import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { OrderRequestDetailUpdateWithoutProductInput } from './order-request-detail-update-without-product.input';

@InputType()
export class OrderRequestDetailUpdateWithWhereUniqueWithoutProductInput {
  @Field(() => OrderRequestDetailWhereUniqueInput, { nullable: false })
  where!: OrderRequestDetailWhereUniqueInput;

  @Field(() => OrderRequestDetailUpdateWithoutProductInput, { nullable: false })
  data!: OrderRequestDetailUpdateWithoutProductInput;
}
