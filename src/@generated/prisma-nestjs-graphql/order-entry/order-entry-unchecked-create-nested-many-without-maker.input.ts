import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryCreateWithoutMakerInput } from './order-entry-create-without-maker.input';
import { OrderEntryCreateOrConnectWithoutMakerInput } from './order-entry-create-or-connect-without-maker.input';
import { OrderEntryCreateManyMakerInputEnvelope } from './order-entry-create-many-maker-input-envelope.input';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';

@InputType()
export class OrderEntryUncheckedCreateNestedManyWithoutMakerInput {
  @Field(() => [OrderEntryCreateWithoutMakerInput], { nullable: true })
  create?: Array<OrderEntryCreateWithoutMakerInput>;

  @Field(() => [OrderEntryCreateOrConnectWithoutMakerInput], { nullable: true })
  connectOrCreate?: Array<OrderEntryCreateOrConnectWithoutMakerInput>;

  @Field(() => OrderEntryCreateManyMakerInputEnvelope, { nullable: true })
  createMany?: OrderEntryCreateManyMakerInputEnvelope;

  @Field(() => [OrderEntryWhereUniqueInput], { nullable: true })
  connect?: Array<OrderEntryWhereUniqueInput>;
}
