import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderArrivalDataCreateWithoutProductInput } from './order-arrival-data-create-without-product.input';
import { OrderArrivalDataCreateOrConnectWithoutProductInput } from './order-arrival-data-create-or-connect-without-product.input';
import { OrderArrivalDataCreateManyProductInputEnvelope } from './order-arrival-data-create-many-product-input-envelope.input';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';

@InputType()
export class OrderArrivalDataCreateNestedManyWithoutProductInput {
  @Field(() => [OrderArrivalDataCreateWithoutProductInput], { nullable: true })
  create?: Array<OrderArrivalDataCreateWithoutProductInput>;

  @Field(() => [OrderArrivalDataCreateOrConnectWithoutProductInput], {
    nullable: true,
  })
  connectOrCreate?: Array<OrderArrivalDataCreateOrConnectWithoutProductInput>;

  @Field(() => OrderArrivalDataCreateManyProductInputEnvelope, {
    nullable: true,
  })
  createMany?: OrderArrivalDataCreateManyProductInputEnvelope;

  @Field(() => [OrderArrivalDataWhereUniqueInput], { nullable: true })
  connect?: Array<OrderArrivalDataWhereUniqueInput>;
}
