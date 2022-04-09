import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';
import { OrderRequestUpdateWithoutOrderEntryInput } from './order-request-update-without-order-entry.input';

@InputType()
export class OrderRequestUpdateWithWhereUniqueWithoutOrderEntryInput {
  @Field(() => OrderRequestWhereUniqueInput, { nullable: false })
  where!: OrderRequestWhereUniqueInput;

  @Field(() => OrderRequestUpdateWithoutOrderEntryInput, { nullable: false })
  data!: OrderRequestUpdateWithoutOrderEntryInput;
}
