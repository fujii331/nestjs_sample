import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestCreateWithoutOrderEntryInput } from './order-request-create-without-order-entry.input';
import { OrderRequestCreateOrConnectWithoutOrderEntryInput } from './order-request-create-or-connect-without-order-entry.input';
import { OrderRequestCreateManyOrderEntryInputEnvelope } from './order-request-create-many-order-entry-input-envelope.input';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';

@InputType()
export class OrderRequestUncheckedCreateNestedManyWithoutOrderEntryInput {
  @Field(() => [OrderRequestCreateWithoutOrderEntryInput], { nullable: true })
  create?: Array<OrderRequestCreateWithoutOrderEntryInput>;

  @Field(() => [OrderRequestCreateOrConnectWithoutOrderEntryInput], {
    nullable: true,
  })
  connectOrCreate?: Array<OrderRequestCreateOrConnectWithoutOrderEntryInput>;

  @Field(() => OrderRequestCreateManyOrderEntryInputEnvelope, {
    nullable: true,
  })
  createMany?: OrderRequestCreateManyOrderEntryInputEnvelope;

  @Field(() => [OrderRequestWhereUniqueInput], { nullable: true })
  connect?: Array<OrderRequestWhereUniqueInput>;
}
