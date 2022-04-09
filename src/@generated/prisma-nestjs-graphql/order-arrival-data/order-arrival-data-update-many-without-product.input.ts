import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderArrivalDataCreateWithoutProductInput } from './order-arrival-data-create-without-product.input';
import { OrderArrivalDataCreateOrConnectWithoutProductInput } from './order-arrival-data-create-or-connect-without-product.input';
import { OrderArrivalDataUpsertWithWhereUniqueWithoutProductInput } from './order-arrival-data-upsert-with-where-unique-without-product.input';
import { OrderArrivalDataCreateManyProductInputEnvelope } from './order-arrival-data-create-many-product-input-envelope.input';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';
import { OrderArrivalDataUpdateWithWhereUniqueWithoutProductInput } from './order-arrival-data-update-with-where-unique-without-product.input';
import { OrderArrivalDataUpdateManyWithWhereWithoutProductInput } from './order-arrival-data-update-many-with-where-without-product.input';
import { OrderArrivalDataScalarWhereInput } from './order-arrival-data-scalar-where.input';

@InputType()
export class OrderArrivalDataUpdateManyWithoutProductInput {
  @Field(() => [OrderArrivalDataCreateWithoutProductInput], { nullable: true })
  create?: Array<OrderArrivalDataCreateWithoutProductInput>;

  @Field(() => [OrderArrivalDataCreateOrConnectWithoutProductInput], {
    nullable: true,
  })
  connectOrCreate?: Array<OrderArrivalDataCreateOrConnectWithoutProductInput>;

  @Field(() => [OrderArrivalDataUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true,
  })
  upsert?: Array<OrderArrivalDataUpsertWithWhereUniqueWithoutProductInput>;

  @Field(() => OrderArrivalDataCreateManyProductInputEnvelope, {
    nullable: true,
  })
  createMany?: OrderArrivalDataCreateManyProductInputEnvelope;

  @Field(() => [OrderArrivalDataWhereUniqueInput], { nullable: true })
  set?: Array<OrderArrivalDataWhereUniqueInput>;

  @Field(() => [OrderArrivalDataWhereUniqueInput], { nullable: true })
  disconnect?: Array<OrderArrivalDataWhereUniqueInput>;

  @Field(() => [OrderArrivalDataWhereUniqueInput], { nullable: true })
  delete?: Array<OrderArrivalDataWhereUniqueInput>;

  @Field(() => [OrderArrivalDataWhereUniqueInput], { nullable: true })
  connect?: Array<OrderArrivalDataWhereUniqueInput>;

  @Field(() => [OrderArrivalDataUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true,
  })
  update?: Array<OrderArrivalDataUpdateWithWhereUniqueWithoutProductInput>;

  @Field(() => [OrderArrivalDataUpdateManyWithWhereWithoutProductInput], {
    nullable: true,
  })
  updateMany?: Array<OrderArrivalDataUpdateManyWithWhereWithoutProductInput>;

  @Field(() => [OrderArrivalDataScalarWhereInput], { nullable: true })
  deleteMany?: Array<OrderArrivalDataScalarWhereInput>;
}
