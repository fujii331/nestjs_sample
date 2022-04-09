import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryCreateWithoutMakerInput } from './order-entry-create-without-maker.input';
import { OrderEntryCreateOrConnectWithoutMakerInput } from './order-entry-create-or-connect-without-maker.input';
import { OrderEntryUpsertWithWhereUniqueWithoutMakerInput } from './order-entry-upsert-with-where-unique-without-maker.input';
import { OrderEntryCreateManyMakerInputEnvelope } from './order-entry-create-many-maker-input-envelope.input';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';
import { OrderEntryUpdateWithWhereUniqueWithoutMakerInput } from './order-entry-update-with-where-unique-without-maker.input';
import { OrderEntryUpdateManyWithWhereWithoutMakerInput } from './order-entry-update-many-with-where-without-maker.input';
import { OrderEntryScalarWhereInput } from './order-entry-scalar-where.input';

@InputType()
export class OrderEntryUncheckedUpdateManyWithoutMakerInput {
  @Field(() => [OrderEntryCreateWithoutMakerInput], { nullable: true })
  create?: Array<OrderEntryCreateWithoutMakerInput>;

  @Field(() => [OrderEntryCreateOrConnectWithoutMakerInput], { nullable: true })
  connectOrCreate?: Array<OrderEntryCreateOrConnectWithoutMakerInput>;

  @Field(() => [OrderEntryUpsertWithWhereUniqueWithoutMakerInput], {
    nullable: true,
  })
  upsert?: Array<OrderEntryUpsertWithWhereUniqueWithoutMakerInput>;

  @Field(() => OrderEntryCreateManyMakerInputEnvelope, { nullable: true })
  createMany?: OrderEntryCreateManyMakerInputEnvelope;

  @Field(() => [OrderEntryWhereUniqueInput], { nullable: true })
  set?: Array<OrderEntryWhereUniqueInput>;

  @Field(() => [OrderEntryWhereUniqueInput], { nullable: true })
  disconnect?: Array<OrderEntryWhereUniqueInput>;

  @Field(() => [OrderEntryWhereUniqueInput], { nullable: true })
  delete?: Array<OrderEntryWhereUniqueInput>;

  @Field(() => [OrderEntryWhereUniqueInput], { nullable: true })
  connect?: Array<OrderEntryWhereUniqueInput>;

  @Field(() => [OrderEntryUpdateWithWhereUniqueWithoutMakerInput], {
    nullable: true,
  })
  update?: Array<OrderEntryUpdateWithWhereUniqueWithoutMakerInput>;

  @Field(() => [OrderEntryUpdateManyWithWhereWithoutMakerInput], {
    nullable: true,
  })
  updateMany?: Array<OrderEntryUpdateManyWithWhereWithoutMakerInput>;

  @Field(() => [OrderEntryScalarWhereInput], { nullable: true })
  deleteMany?: Array<OrderEntryScalarWhereInput>;
}
