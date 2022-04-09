import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailCreateWithoutProductInput } from './order-request-detail-create-without-product.input';
import { OrderRequestDetailCreateOrConnectWithoutProductInput } from './order-request-detail-create-or-connect-without-product.input';
import { OrderRequestDetailCreateManyProductInputEnvelope } from './order-request-detail-create-many-product-input-envelope.input';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';

@InputType()
export class OrderRequestDetailCreateNestedManyWithoutProductInput {
  @Field(() => [OrderRequestDetailCreateWithoutProductInput], {
    nullable: true,
  })
  create?: Array<OrderRequestDetailCreateWithoutProductInput>;

  @Field(() => [OrderRequestDetailCreateOrConnectWithoutProductInput], {
    nullable: true,
  })
  connectOrCreate?: Array<OrderRequestDetailCreateOrConnectWithoutProductInput>;

  @Field(() => OrderRequestDetailCreateManyProductInputEnvelope, {
    nullable: true,
  })
  createMany?: OrderRequestDetailCreateManyProductInputEnvelope;

  @Field(() => [OrderRequestDetailWhereUniqueInput], { nullable: true })
  connect?: Array<OrderRequestDetailWhereUniqueInput>;
}
