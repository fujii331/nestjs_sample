import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';
import { OrderEntryCreateWithoutOrderRequestInput } from './order-entry-create-without-order-request.input';

@InputType()
export class OrderEntryCreateOrConnectWithoutOrderRequestInput {
  @Field(() => OrderEntryWhereUniqueInput, { nullable: false })
  where!: OrderEntryWhereUniqueInput;

  @Field(() => OrderEntryCreateWithoutOrderRequestInput, { nullable: false })
  create!: OrderEntryCreateWithoutOrderRequestInput;
}
