import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';
import { OrderRequestCreateWithoutOrderEntryInput } from './order-request-create-without-order-entry.input';

@InputType()
export class OrderRequestCreateOrConnectWithoutOrderEntryInput {
  @Field(() => OrderRequestWhereUniqueInput, { nullable: false })
  where!: OrderRequestWhereUniqueInput;

  @Field(() => OrderRequestCreateWithoutOrderEntryInput, { nullable: false })
  create!: OrderRequestCreateWithoutOrderEntryInput;
}
