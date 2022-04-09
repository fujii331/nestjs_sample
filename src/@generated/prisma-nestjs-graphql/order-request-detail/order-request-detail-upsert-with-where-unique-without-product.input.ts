import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { OrderRequestDetailUpdateWithoutProductInput } from './order-request-detail-update-without-product.input';
import { OrderRequestDetailCreateWithoutProductInput } from './order-request-detail-create-without-product.input';

@InputType()
export class OrderRequestDetailUpsertWithWhereUniqueWithoutProductInput {
  @Field(() => OrderRequestDetailWhereUniqueInput, { nullable: false })
  where!: OrderRequestDetailWhereUniqueInput;

  @Field(() => OrderRequestDetailUpdateWithoutProductInput, { nullable: false })
  update!: OrderRequestDetailUpdateWithoutProductInput;

  @Field(() => OrderRequestDetailCreateWithoutProductInput, { nullable: false })
  create!: OrderRequestDetailCreateWithoutProductInput;
}
